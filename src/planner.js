/* ======================= PLANIFICADOR ======================= */
const DAYS = [
 {k:"d1", label:"Mié 25", long:"Miércoles 25", date:"2026-11-25", dow:3, start:"10:30"},
 {k:"d2", label:"Jue 26", long:"Jueves 26",    date:"2026-11-26", dow:4, start:"09:30"},
 {k:"d3", label:"Vie 27", long:"Viernes 27",   date:"2026-11-27", dow:5, start:"09:30"}
];
const NIGHT_FROM = 17*60;          // a partir de aquí arranca el bloque de noche
const SUNSET = "16:00";
const DINNER = 19*60+30;   // restaurantes de noche: a partir de las 19:30
const isMealOnly = p => p.cats.length===1 && p.cats[0]==="comida";
const CATS = [["todos","Todos"],["imperdible","Imperdibles"],["dia","De día"],["noche","De noche"],["comida","Comer y beber"]];
const CATNAME = {imperdible:"Imperdible", dia:"De día", noche:"De noche", comida:"Comer y beber"};
const SUGGEST = {
 d1:{day:["zapatos","parlamento","libertad","basilica","puente","castillo","matias","bastion"], night:["navidad","crucero","hungarikum"]},
 d2:{day:["sinagoga","museo","newyork","opera","terror","heroes","vajdahunyad","szechenyi"], night:["frici","szimpla"]},
 d3:{day:["mercado","cueva","gellert","hospital"], night:["mirador"]}
};
const MUST = PLACES.filter(p=>p.cats.includes("imperdible")).map(p=>p.id);
const P = id => PLACES.find(p=>p.id===id);
let STOPS = [];                     // recorrido activo (lugares ordenados)
let plan = store.get("bud_plan") || {d1:[],d2:[],d3:[]};
let curDay = (()=>{ const t=new Date(); const iso=t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0"); const d=DAYS.find(d=>d.date===iso); return d?d.k:(store.get("bud_day")||"d1"); })();
let catF = "todos";
const savePlan = ()=>{ store.set("bud_plan",plan); store.set("bud_day",curDay); };
const inPlan = (id,day=curDay)=> plan[day].find(x=>x.id===id);
const dayOf = id => DAYS.find(d=>plan[d.k].some(x=>x.id===id));

/* ---------- horarios ---------- */
const toMin = s => { const [h,m]=s.split(":").map(Number); return h*60+m; };
const fmt = m => { m=Math.round(m); const h=Math.floor(m/60)%24, mm=m%60; return String(h).padStart(2,"0")+":"+String(mm).padStart(2,"0"); };
function win(p,dow){ const h=p.hours?p.hours[dow]:"24h"; if(h==="24h") return {o:0,c:24*60+600,all:true}; if(!h) return null; const [a,b]=h.split("-"); let o=toMin(a), c=toMin(b); if(c<=o) c+=24*60; return {o,c}; }
function hoursText(p,dow){ const h=p.hours?p.hours[dow]:"24h"; if(h==="24h") return "Siempre abierto"; if(!h) return "Cerrado ese día"; return h.replace("-"," a "); }
/* estado a un minuto dado del día: ok | warn | bad */
function statusAt(p,dow,min){
 const w=win(p,dow); if(!w) return {k:"bad",t:"Cerrado ese día"};
 if(w.all) return {k:"ok",t:""};
 const last=w.c-(p.le||0);
 if(min<w.o) return {k:"warn",t:`Abre a las ${fmt(w.o)}`};
 if(min>last) return {k:"bad",t:min>w.c?`Ya cerró (${fmt(w.c%1440)})`:`Último acceso ${fmt(last%1440)}`};
 if(last-min<45) return {k:"warn",t:`Cierra ${fmt(w.c%1440)}: vayan directo`};
 return {k:"ok",t:`Abierto hasta ${fmt(w.c%1440)}`};
}

/* ---------- optimización de recorrido ---------- */
const walkD = (a,b)=> dist(a,b)*1.25;      // calles no son línea recta
function legMin(d){ return d>2200 ? 14+d/450 : d/78; }   // a pie ~4,7 km/h; si es lejos, transporte
function orderPath(start,pts){
 if(pts.length<2) return pts.slice();
 // vecino más cercano
 let rest=pts.slice(), path=[], cur=start;
 while(rest.length){ let bi=0,bd=Infinity; rest.forEach((p,i)=>{ const d=walkD(cur,p); if(d<bd){bd=d;bi=i;} }); cur=rest.splice(bi,1)[0]; path.push(cur); }
 // 2-opt (camino abierto con inicio fijo)
 const L=a=>{ let s=walkD(start,a[0]); for(let i=1;i<a.length;i++) s+=walkD(a[i-1],a[i]); return s; };
 let improved=true, guard=0;
 while(improved && guard++<60){ improved=false;
  for(let i=0;i<path.length-1;i++) for(let k=i+1;k<path.length;k++){
   const np=path.slice(0,i).concat(path.slice(i,k+1).reverse(),path.slice(k+1));
   if(L(np)+0.5<L(path)){ path=np; improved=true; }
  }
 }
 return path;
}
/* simula horarios de una secuencia: devuelve distancia, conflictos y hora final */
function simulate(seq,start,t,dow,night){
 let d=0,bad=0,prev=start;
 let wait=0;
 for(const p of seq){ const dd=walkD(prev,p); d+=dd; t+=legMin(dd); if(night&&t<NIGHT_FROM) t=NIGHT_FROM; if(night&&isMealOnly(p)&&t<DINNER){ wait+=DINNER-t; t=DINNER; } const w=win(p,dow); if(w&&!w.all&&t<w.o&&w.o-t<=300){ wait+=w.o-t; t=w.o; } if(statusAt(p,dow,t).k==="bad") bad++; t+=p.visit; prev=p; }
 return {d,bad,t,last:prev,wait};
}
/* recorrido más corto, evitando llegar a lugares cerrados si cuesta poco desvío */
function bestPath(start,pts,t0,dow,night){
 if(pts.length<2) return pts.slice();
 const cands=[orderPath(start,pts)];
 pts.forEach(first=>{ const rest=pts.filter(p=>p!==first); cands.push([first,...orderPath(first,rest)]); });
 let best=null,bs=Infinity;
 cands.forEach(c=>{ const r=simulate(c,start,t0,dow,night); const sc=r.d+r.bad*2500+r.wait*60; if(sc<bs-0.5){ bs=sc; best=c; } });
 return best;
}
/* devuelve [{p,night,eta,legM,legD,st}] */
function buildDay(dayK,start,startMin,skipVisited){
 const d=DAYS.find(x=>x.k===dayK);
 let items=plan[dayK].map(x=>({p:P(x.id),night:x.night})).filter(x=>x.p && !(skipVisited&&visited[x.p.id]));
 const dayPts=bestPath(start,items.filter(x=>!x.night).map(x=>x.p),startMin,d.dow,false);
 const sim=simulate(dayPts,start,startMin,d.dow,false);
 const nightPts=bestPath(sim.last,items.filter(x=>x.night).map(x=>x.p),sim.t,d.dow,true);
 const out=[]; let t=startMin, prev=start;
 const push=(p,night)=>{ const dd=walkD(prev,p), lm=legMin(dd); t+=lm; if(night && t<NIGHT_FROM) t=NIGHT_FROM; if(night&&isMealOnly(p)&&t<DINNER) t=DINNER; const w=win(p,d.dow); let st; if(w&&!w.all&&t<w.o&&w.o-t<=300){ st={k:"warn",t:`Esperan hasta que abra, ${fmt(w.o)}`}; t=w.o; } const eta=t; st=st||statusAt(p,d.dow,eta); out.push({p,night,eta,legD:dd,legM:lm,st}); t+=p.visit; prev=p; };
 dayPts.forEach(p=>push(p,false)); nightPts.forEach(p=>push(p,true));
 return out;
}
function dayStart(dayK){ const d=DAYS.find(x=>x.k===dayK); const now=new Date(); const iso=d.date; const todayIso=now.toISOString().slice(0,10); let m=toMin(d.start); if(iso===todayIso){ m=Math.max(m,now.getHours()*60+now.getMinutes()); } return m; }

/* ---------- UI: fichas ---------- */
function thumbStyle(id){ return IMG[id]?`background-image:url('${IMG[id]}')`:`background:linear-gradient(135deg,#24324d,#3b2a4a)`; }
function thumbInner(id){ return IMG[id]?"":`<span class="ico">${PICON[id]||"📍"}</span>`; }
function renderTabs(){
 $("#dayTabs").innerHTML=DAYS.map(d=>`<button class="dtab ${d.k===curDay?"on":""}" data-d="${d.k}"><b>${d.label}</b><span>${plan[d.k].length?plan[d.k].length+" lugares":"vacío"}</span></button>`).join("");
 document.querySelectorAll("#dayTabs .dtab").forEach(b=>b.onclick=()=>{ curDay=b.dataset.d; savePlan(); renderPlanner(); });
 $("#catChips").innerHTML=CATS.map(([k,n])=>`<button class="cchip ${k===catF?"on":""}" data-c="${k}">${n}</button>`).join("");
 document.querySelectorAll("#catChips .cchip").forEach(b=>b.onclick=()=>{ catF=b.dataset.c; renderTabs(); renderCatalog(); });
}
function renderCatalog(){
 const d=DAYS.find(x=>x.k===curDay);
 const list=PLACES.filter(p=>catF==="todos"||p.cats.includes(catF));
 $("#catalog").innerHTML=list.map(p=>{
  const here=inPlan(p.id), other=!here&&dayOf(p.id);
  const w=win(p,d.dow);
  return `<article class="card ${here?"sel":""}" data-id="${p.id}">
   <div class="cph" style="${thumbStyle(p.id)}">${thumbInner(p.id)}${p.cats.includes("imperdible")?`<span class="tag">Imperdible</span>`:""}${p.cats.includes("noche")&&!p.cats.includes("dia")?`<span class="tag night">De noche</span>`:""}</div>
   <div class="cbody"><b>${p.name}</b><span class="cs">${p.short}</span>
    <span class="cm">~${p.visit} min · ${w?(w.all?"siempre abierto":hoursText(p,d.dow)):"<em>cerrado el "+d.long.split(" ")[0].toLowerCase()+"</em>"}${other?` · en ${other.label}`:""}</span></div>
   <button class="cadd ${here?"on":""}" data-add="${p.id}" aria-label="${here?"Quitar del día":"Agregar al día"}">${here?"✓":"+"}</button>
  </article>`; }).join("");
 document.querySelectorAll("#catalog .card").forEach(c=>c.onclick=e=>{ if(e.target.closest("[data-add]")) return; openPlace(c.dataset.id); });
 document.querySelectorAll("#catalog [data-add]").forEach(b=>b.onclick=e=>{ e.stopPropagation(); toggleInPlan(b.dataset.add); });
}
function toggleInPlan(id,forceNight){
 const p=P(id); const ex=inPlan(id);
 if(ex){ plan[curDay]=plan[curDay].filter(x=>x.id!==id); toast("Quitado del "+DAYS.find(d=>d.k===curDay).label); }
 else {
  const other=dayOf(id); if(other){ plan[other.k]=plan[other.k].filter(x=>x.id!==id); }
  const night = forceNight!=null?forceNight : (catF==="noche"&&p.cats.includes("noche")) || !!p.night;
  plan[curDay].push({id,night}); toast((night?"🌙 ":"")+p.name+" → "+DAYS.find(d=>d.k===curDay).label+(other?` (lo saqué del ${other.label})`:""));
 }
 savePlan(); renderPlanner(); if($("#pd").classList.contains("on")) fillPlace(id);
}

/* ---------- UI: itinerario ---------- */
let lastBuilt=[];
function planStart(){ return pos && dist(pos,HOTEL)<15000 ? {lat:pos.lat,lng:pos.lng,here:true} : {lat:HOTEL.lat,lng:HOTEL.lng}; }
function renderItinerary(){
 const d=DAYS.find(x=>x.k===curDay), st=planStart();
 const built=buildDay(curDay,st,dayStart(curDay),false); lastBuilt=built;
 const box=$("#itin");
 if(!built.length){ box.innerHTML=`<div class="empty"><b>${d.long}: todavía sin lugares</b><span>Toquen + en las fichas de abajo, o usen la sugerencia.</span><button class="btn gold" id="bSuggest">✨ Sugerirme un plan para ${d.label}</button></div>`; $("#bSuggest").onclick=()=>suggest(curDay); $("#planSum").textContent=""; $("#bStart").classList.add("hidden"); return; }
 let html=`<div class="istart"><span class="dot0">${st.here?"📍":"🛏️"}</span><span>${st.here?"Desde donde están":"Desde el hotel"} · ${fmt(dayStart(curDay))}</span></div>`;
 let nightShown=false, km=0;
 built.forEach((x,i)=>{
  km+=x.legD;
  if(x.night && !nightShown){ nightShown=true; html+=`<div class="isep">🌙 De noche · desde las ${fmt(Math.max(NIGHT_FROM,x.eta))}</div>`; }
  const far=x.legD>2200;
  html+=`<div class="ileg">${far?"🚇":"🚶"} ${x.legD<1000?Math.round(x.legD/10)*10+" m":(x.legD/1000).toFixed(1)+" km"} · ${Math.round(x.legM)} min${far?" · mejor en transporte":""}</div>
  <div class="iitem ${visited[x.p.id]?"done":""}" data-id="${x.p.id}">
   <span class="inum">${visited[x.p.id]?"✓":i+1}</span>
   <div class="ith" style="${thumbStyle(x.p.id)}">${thumbInner(x.p.id)}</div>
   <div class="itx"><b>${x.p.name}</b><span>~${fmt(x.eta)} · ${x.p.visit} min${x.st.t&&x.st.k!=="ok"?` · <em class="${x.st.k}">${x.st.t}</em>`:""}</span></div>
   <button class="imini" data-night="${x.p.id}" aria-label="Cambiar día o noche">${x.night?"🌙":"☀️"}</button>
   <button class="imini" data-rm="${x.p.id}" aria-label="Quitar">✕</button>
  </div>`;
 });
 const end=built[built.length-1]; const tEnd=end.eta+end.p.visit;
 html+=`<div class="ileg">🛏️ Vuelta al hotel · ${(walkD(end.p,HOTEL)/1000).toFixed(1)} km</div>`;
 box.innerHTML=html;
 const warns=built.filter(x=>x.st.k==="bad").length;
 $("#planSum").innerHTML=`<b>${built.length} lugares</b> · ${(km/1000).toFixed(1)} km · terminan ~${fmt(tEnd)}${warns?` · <em class="bad">${warns} con horario en conflicto</em>`:""}<br><span>Ordenado por cercanía${st.here?" desde su ubicación":" desde el hotel"}. Atardecer ~${SUNSET}.</span>`;
 $("#bStart").classList.remove("hidden");
 const allDone=built.every(x=>visited[x.p.id]);
 $("#bStart").textContent = allDone?"✓ Día completo · repetir":(built.some(x=>visited[x.p.id])?"Seguir el recorrido →":"Empezar el recorrido →");
 box.querySelectorAll(".iitem").forEach(el=>el.onclick=e=>{ if(e.target.closest("button")) return; openPlace(el.dataset.id); });
 box.querySelectorAll("[data-rm]").forEach(b=>b.onclick=()=>toggleInPlan(b.dataset.rm));
 box.querySelectorAll("[data-night]").forEach(b=>b.onclick=()=>{ const it=inPlan(b.dataset.night); it.night=!it.night; savePlan(); renderPlanner(); });
}
function suggest(k){
 const s=SUGGEST[k]; const taken=new Set(DAYS.filter(d=>d.k!==k).flatMap(d=>plan[d.k].map(x=>x.id)));
 plan[k]=[...s.day.filter(i=>!taken.has(i)).map(id=>({id,night:false})),...s.night.filter(i=>!taken.has(i)).map(id=>({id,night:true}))];
 savePlan(); renderPlanner(); toast("✨ Plan sugerido. Agreguen o quiten lo que quieran.");
}
let fullArm=false;
function suggestAll(){
 const any=DAYS.some(d=>plan[d.k].length);
 if(any&&!fullArm){ fullArm=true; toast("Tóquenlo otra vez para reemplazar su plan actual por el plan completo"); setTimeout(()=>fullArm=false,5000); return; }
 fullArm=false;
 DAYS.forEach(d=>{ const s=SUGGEST[d.k]; plan[d.k]=[...s.day.map(id=>({id,night:false})),...s.night.map(id=>({id,night:true}))]; });
 savePlan(); renderPlanner(); toast("✨ Plan completo: los 12 imperdibles y "+(DAYS.reduce((n,d)=>n+plan[d.k].length,0)-MUST.length)+" lugares más en 3 días");
}
function renderCoverage(){
 const inAny=id=>DAYS.some(d=>plan[d.k].some(x=>x.id===id));
 const miss=MUST.filter(id=>!inAny(id)); const n=MUST.length-miss.length;
 $("#cover").innerHTML=`<div class="covtop"><b>Imperdibles en su plan: ${n} de ${MUST.length}</b><div class="covbar"><i style="width:${n/MUST.length*100}%"></i></div></div>`+
  (miss.length?`<div class="covmiss">Les faltan: ${miss.map(id=>`<button class="covchip" data-c="${id}">+ ${P(id).name}</button>`).join("")}</div><span class="covhint">Se agregan al día que están mirando.</span>`:`<span class="covhint">✓ No se pierden ninguno de los lugares esenciales.</span>`)+
  `<button class="btn ${DAYS.some(d=>plan[d.k].length)?"":"gold"} full" id="bSuggestAll" style="margin-top:10px">✨ Armarme los 3 días completos</button>`;
 $("#cover").querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>toggleInPlan(b.dataset.c,false));
 $("#bSuggestAll").onclick=suggestAll;
}
function renderPlanner(){ renderCoverage(); renderTabs(); renderItinerary(); renderCatalog(); drawPlanMap(); $("#bStartN").textContent=DAYS.find(d=>d.k===curDay).label; }

/* ---------- mapa del planificador ---------- */
let pmap=null, pMarkers={}, hotelMk=null, pmeMk=null, routeSeq=0;
function initPlanMap(){
 if(pmap) return;
 if(typeof maplibregl==="undefined"){ $("#pmap").innerHTML='<div class="nomap">No se pudo cargar el mapa en esta vista. Ábranla desde GitHub Pages.</div>'; return; }
 pmap=new maplibregl.Map({container:"pmap",style:STYLE_DET,center:[19.052,47.500],zoom:13.2,attributionControl:{compact:true}});
 pmap.addControl(new maplibregl.NavigationControl({showCompass:false}),"top-right");
 pmap.on("load",()=>{ const empty={type:"Feature",geometry:{type:"LineString",coordinates:[]}};
  pmap.addSource("proute",{type:"geojson",data:empty}); pmap.addSource("proute-n",{type:"geojson",data:empty});
  pmap.addLayer({id:"proute-c",type:"line",source:"proute",layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#0b101a","line-width":8,"line-opacity":.3}});
  pmap.addLayer({id:"proute",type:"line",source:"proute",layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#e6a92e","line-width":4.5}});
  pmap.addLayer({id:"proute-n",type:"line",source:"proute-n",layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"#6f7dff","line-width":4,"line-dasharray":[1.2,1.4]}});
  drawPlanMap(true); });
 PLACES.forEach(p=>{ const el=document.createElement("div"); el.className="pm"; el.onclick=e=>{e.stopPropagation(); openPlace(p.id);}; pMarkers[p.id]=new maplibregl.Marker({element:el}).setLngLat([p.lng,p.lat]).addTo(pmap); });
 const he=document.createElement("div"); he.className="pm hotel"; he.textContent="🛏️"; hotelMk=new maplibregl.Marker({element:he}).setLngLat([HOTEL.lng,HOTEL.lat]).addTo(pmap);
}
async function drawPlanMap(fit){
 if(!pmap) return;
 const order=lastBuilt.map(x=>x.p.id);
 PLACES.forEach(p=>{ const el=pMarkers[p.id].getElement(); const i=order.indexOf(p.id); const show=catF==="todos"||p.cats.includes(catF)||i>=0;
  mkCls(el,"pm"+(i>=0?" on"+(lastBuilt[i].night?" nt":""):"")+(visited[p.id]&&i>=0?" dn":"")); el.style.zIndex=i>=0?2:1; el.textContent=i>=0?(visited[p.id]?"✓":i+1):""; el.style.display=show?"":"none"; el.title=p.name; });
 if(pos){ if(!pmeMk){ const m=document.createElement("div"); m.className="me2 nobeam"; m.innerHTML='<div class="halo"></div><div class="dot"></div>'; pmeMk=new maplibregl.Marker({element:m}).setLngLat([pos.lng,pos.lat]).addTo(pmap);} else pmeMk.setLngLat([pos.lng,pos.lat]); }
 const st=planStart();
 const dayP=[st,...lastBuilt.filter(x=>!x.night).map(x=>x.p)];
 const ngt=lastBuilt.filter(x=>x.night).map(x=>x.p);
 const nightP=ngt.length?[dayP[dayP.length-1],...ngt]:[];
 const line=a=>({type:"Feature",geometry:{type:"LineString",coordinates:a.map(p=>[p.lng,p.lat])}});
 const sD=pmap.getSource&&pmap.getSource("proute"), sN=pmap.getSource&&pmap.getSource("proute-n");
 if(sD){ sD.setData(line(dayP.length>1?dayP:[])); sN.setData(line(nightP)); }
 const all=[st,...lastBuilt.map(x=>x.p)];
 if(all.length>1 && fit!==false){ const bb=all.reduce((b,p)=>b.extend([p.lng,p.lat]),new maplibregl.LngLatBounds([all[0].lng,all[0].lat],[all[0].lng,all[0].lat])); pmap.fitBounds(bb,{padding:{top:60,bottom:60,left:40,right:60},maxZoom:15.5,duration:600}); }
 const my=++routeSeq;
 const osrm=async(pts,src)=>{ if(!src||pts.length<2||pts.length>25) return; try{ const r=await fetch(`https://routing.openstreetmap.de/routed-foot/route/v1/driving/${pts.map(p=>p.lng+","+p.lat).join(";")}?overview=full&geometries=geojson`); const j=await r.json(); if(my===routeSeq&&j.routes&&j.routes[0]) src.setData({type:"Feature",geometry:j.routes[0].geometry}); }catch(e){} };
 osrm(dayP,sD); osrm(nightP,sN);
}
function setPlanFull(on){ $("#pmapwrap").classList.toggle("full",on); document.body.classList.toggle("pfull",on); $("#bPFull").textContent=on?"✕":"⛶"; setTimeout(()=>{ if(pmap){ pmap.resize(); drawPlanMap(true); } },80); }
$("#bPFull").onclick=()=>setPlanFull(!$("#pmapwrap").classList.contains("full"));

/* ---------- ficha de detalle ---------- */
let pdId=null;
function openPlace(id){ pdId=id; fillPlace(id); $("#pd").classList.add("on"); $("#pdBg").classList.add("on"); $("#pd").scrollTop=0; }
function closePlace(){ $("#pd").classList.remove("on"); $("#pdBg").classList.remove("on"); }
function fillPlace(id){
 const p=P(id), d=DAYS.find(x=>x.k===curDay), here=inPlan(id), other=!here&&dayOf(id);
 $("#pdHero").setAttribute("style",thumbStyle(id)); $("#pdHero").innerHTML=thumbInner(id);
 $("#pdHu").textContent=p.hu; $("#pdName").textContent=p.name;
 $("#pdChips").innerHTML=p.cats.map(c=>`<span class="pill">${CATNAME[c]}</span>`).join("")+`<span class="pill">~${p.visit} min</span>`;
 $("#pdShort").textContent=p.short;
 $("#pdHours").innerHTML=`<b>${d.long}:</b> ${hoursText(p,d.dow)}. ${p.hnote||""}`;
 $("#pdNarr").textContent=BRIEF[id]||p.narr;
 $("#pdTip").textContent=p.tip||"";
 const ch=(CHAPTERS[id]||[]).length; const mins=Math.max(1,Math.round((p.narr+" "+(CHAPTERS[id]||[]).map(c=>c.x).join(" ")).split(/\s+/).length/150));
 $("#pdMore").innerHTML=`🎧 <b>En el lugar:</b> visita guiada de unos ${mins} minutos${ch?`, con ${ch+1} historias`:""}${QUIZ[id]?" y una trivia":""}. Esta ficha es solo para decidir; las historias se las cuento allá.`;
 $("#pdAdd").textContent=here?`✓ En el ${d.label} · quitar`:(other?`Mover al ${d.label} (está en ${other.label})`:`+ Agregar al ${d.label}`);
 $("#pdAdd").className="btn full "+(here?"":"gold");
 $("#pdMaps").href=mapsUrl(p);
 $("#pdListen .lt b").textContent="Escuchar el resumen";
 $("#pdListen .lt span").textContent=`~${Math.max(1,Math.round((BRIEF[id]||p.narr).split(/\s+/).length/150))} min · qué van a ver y por qué ir`;
}
$("#pdBg").onclick=closePlace; $("#pdClose").onclick=closePlace;
$("#pdAdd").onclick=()=>toggleInPlan(pdId);
$("#pdListen").onclick=()=>{ unlockAudio(); const p=P(pdId); if(speaking&&nowLabel===p.name){ togglePause(); return; } say(`${p.name}. ${BRIEF[p.id]||p.narr}`,p.name); };

/* ---------- arrancar el recorrido del día ---------- */
function goPlanner(){ view="plan"; render(); updatePlayer(); window.scrollTo({top:0}); setTimeout(()=>{ initPlanMap(); if(pmap) pmap.resize(); renderPlanner(); },60); }
function startDay(){
 unlockAudio(); startCompass(); keepAwake();
 if(!plan[curDay].length){ toast("Primero agreguen lugares al día"); return; }
 const go=()=>{
  const st=planStart(); let built=buildDay(curDay,st,dayStart(curDay),true);
  if(!built.length){ built=buildDay(curDay,st,dayStart(curDay),false); plan[curDay].forEach(x=>visited[x.id]=false); }
  STOPS=built.map(x=>x.p); idx=0; activeDay=curDay; store.set("bud_active",{day:curDay,ids:STOPS.map(s=>s.id)});
  rebuildStopMarkers(); view="guide"; mode="walk";
  const intro=!told["intro"]; markTold("intro"); beginLeg(intro);
  toast(st.here?`📍 Arrancamos por ${STOPS[0].name}, lo más cercano`:`Arrancamos por ${STOPS[0].name}`);
 };
 if(pos){ go(); return; }
 toast("Buscando su ubicación…"); let done=false;
 const t=setTimeout(()=>{ if(!done){ done=true; go(); } },7000);
 startGeo(()=>{ if(!done){ done=true; clearTimeout(t); go(); } });
}
function reorderFromHere(){
 if(!STOPS.length) return;
 const st=pos?{lat:pos.lat,lng:pos.lng}:STOPS[idx]; const built=buildDay(activeDay||curDay,st,new Date().getHours()*60+new Date().getMinutes(),true);
 if(!built.length){ toast("No quedan lugares pendientes hoy"); return; }
 STOPS=built.map(x=>x.p); idx=0; rebuildStopMarkers(); mode="walk"; startLeg(); render(); toast("🔁 Reordenado desde donde están: "+STOPS[0].name);
}
let activeDay=null;
$("#bStart").onclick=startDay;

/* botón flotante para empezar, visible cuando el botón principal no está en pantalla */
(function(){ const b=$("#bStart"), f=$("#bGoFab"); let vis=true;
 const upd=()=>{ const show = typeof view!=="undefined" && view==="plan" && !b.classList.contains("hidden") && !vis && !$("#pd")?.classList.contains("on") && !document.querySelector(".sheet.on,#pro.on,#tips.on");
   f.textContent="▶ "+b.textContent.replace(/\s*→$/,""); f.classList.toggle("hidden",!show); };
 try{ new IntersectionObserver(es=>{ vis=es[0].isIntersecting; upd(); }).observe(b); }catch(e){}
 f.onclick=()=>b.click(); setInterval(upd,700); })();
