/* ---- reproductor del prólogo ---- */
let prolOn=false, lastProl="";
const prolState=store.get("bud_prol")||{};
function prolDone(i){ return !!prolState[i]; }
function renderProl(){
  $("#proList").innerHTML=PROLOGUE.map((c,i)=>`<button class="chap ${prolDone(i)?"done":""} ${speaking&&nowLabel==="🎧 "+c.t?"now":""}" data-p="${i}"><span class="pl">${prolDone(i)?"✓":i+1}</span><span><b>${c.t}</b><span class="s">~${(Math.round(c.x.split(/\s+/).length/150*2)/2).toString().replace(".",",")} min${i===PROLOGUE.length-1?" · para cuando pasen por el Danubio":""}</span></span></button>`).join("");
  document.querySelectorAll("#proList [data-p]").forEach(b=>b.onclick=()=>playProl(+b.dataset.p,true));
  const n=PROLOGUE.filter((c,i)=>prolDone(i)).length;
  const sub=n===0?"Mil años en 10 minutos · ideal para el tren":n<PROLOGUE.length?`Escucharon ${n} de ${PROLOGUE.length} capítulos · seguir`:"✓ Escuchado · volver a escucharlo";
  if($("#prolSub")) $("#prolSub").textContent=sub;
  $("#bProl2").classList.toggle("heard",n===PROLOGUE.length);
}
function playProl(i,chain){ unlockAudio(); const c=PROLOGUE[i]; if(!c){ prolOn=false; return; } prolOn=!!chain; prolState[i]=1; store.set("bud_prol",prolState); say(`${c.t}. ${c.x}`,"🎧 "+c.t); renderProl(); }
function openProl(on){ $("#pro").classList.toggle("on",on); $("#proBg").classList.toggle("on",on); if(on){ renderProl(); startGeo(); } }
$("#bProl").onclick=()=>{ enterApp(); goPlanner(); openProl(true); };
$("#bProl2").onclick=()=>openProl(true);
$("#proBg").onclick=()=>openProl(false); $("#proClose").onclick=()=>openProl(false);
$("#proAll").onclick=()=>{ const i=PROLOGUE.findIndex((c,k)=>!prolDone(k)&&k<PROLOGUE.length-1); playProl(i<0?0:i,true); };
{ const _ose=onSpeechEnd; onSpeechEnd=function(){
    if(prolOn&&!speaking&&!paused){ const last=PROLOGUE.findIndex(c=>"🎧 "+c.t===lastProl); const nx=last+1; if(nx>0&&nx<PROLOGUE.length-1){ playProl(nx,true); return; } prolOn=false; renderProl(); return; }
    _ose(); }; }
{ const _say=say; say=function(t,l){ if(l&&l.startsWith("🎧 ")) lastProl=l; else if(prolOn&&l!=="Prueba de voz") prolOn=false; return _say(t,l); }; }
/* aviso por la ventana del tren */
let lastTrainPending=false;
setInterval(()=>{ if(lastTrainPending&&!speaking){ lastTrainPending=false; playProl(PROLOGUE.length-1,false); return; } if(!pos||prolState.train) return; if(TRAIN_SPOTS.some(s=>dist(pos,s)<s.r)){ prolState.train=1; store.set("bud_prol",prolState); toast("🚆 Miren por la ventana: el Danubio"); if(!speaking) playProl(PROLOGUE.length-1,false); else lastTrainPending=true; } },5000);
