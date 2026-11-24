/* ======================= ARRANQUE ======================= */
view="plan";
/* traer la voz elegida en la app de Toledo (mismo sitio) */
(function migrate(){ try{ if(!localStorage.getItem("bud_prefs")){ const t=JSON.parse(localStorage.getItem("toledo_prefs")||"null"); if(t){ ["rate","prov","key","ovoice","evoice","auto"].forEach(k=>{ if(t[k]!=null) prefs[k]=t[k]; }); store.set("bud_prefs",prefs); if(prefs.rate) rate=prefs.rate; if(prefs.auto===false) autoVoice=false; loadVoices(); } } }catch(e){} })();
{ const _up=updatePlayer; updatePlayer=function(){ _up(); const on=speaking&&!paused; const p=pdId&&P(pdId); $("#pd").classList.toggle("playing",!!(on&&p&&nowLabel===p.name)); const pl=$("#pdListen .pl"); if(pl) pl.textContent=(on&&p&&nowLabel===p.name)?"❚❚":"▶"; }; }
function enterApp(){
  unlockAudio();
  $("#landing").classList.add("hidden"); $("#app").classList.remove("hidden"); $("#player").classList.remove("hidden");
  window.scrollTo({top:0}); startGeo();
}
function restoreActive(){
  const a=store.get("bud_active"); if(!a||!a.ids||!a.ids.length) return false;
  STOPS=a.ids.map(P).filter(Boolean); if(!STOPS.length) return false;
  activeDay=a.day||curDay; idx=Math.min(a.idx||0,STOPS.length-1); if(visited[STOPS[idx].id]){ const n=STOPS.findIndex(s=>!visited[s.id]); if(n>=0) idx=n; }
  return true;
}
$("#go").onclick=()=>{ enterApp(); goPlanner(); };
{ const a=store.get("bud_active"); if(a&&a.ids&&a.ids.length&&a.ids.some(id=>!visited[id])){ const d=DAYS.find(x=>x.k===a.day); const r=$("#resume"); r.classList.remove("hidden"); r.textContent=`▶ Seguir el recorrido del ${d?d.label:"día"} (${a.ids.filter(id=>visited[id]).length} de ${a.ids.length} visitados)`;
  r.onclick=()=>{ enterApp(); if(restoreActive()){ startCompass(); keepAwake(); initMap(); beginLeg(false); } else goPlanner(); }; } }
const _beginLeg=beginLeg; beginLeg=function(intro){ if(!map) initMap(); else rebuildStopMarkers(); _beginLeg(intro); };
updStoryCount(); $("#score").textContent="⭐ "+quizState.score;
