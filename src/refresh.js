/* ======================= DESLIZAR PARA ACTUALIZAR + VERSIÓN NUEVA ======================= */
(function ptr(){
  const ind=document.createElement("div"); ind.id="ptr"; ind.innerHTML='<span class="ptr-ic">↓</span><span class="ptr-tx">Deslicen para actualizar</span>'; document.body.appendChild(ind);
  const ic=ind.querySelector(".ptr-ic"), tx=ind.querySelector(".ptr-tx");
  const TH=90; let y0=null, dy=0, armed=false;
  const blocked=t=>t.closest("#map,#pmap,.sheet.on,#ar:not(.hidden),.cchips,.maplibregl-canvas,#splash");
  addEventListener("touchstart",e=>{ if(e.touches.length!==1||scrollY>0||blocked(e.target)){ y0=null; return; } y0=e.touches[0].clientY; dy=0; armed=false; },{passive:true});
  addEventListener("touchmove",e=>{ if(y0==null) return; dy=e.touches[0].clientY-y0; if(dy<=0||scrollY>0){ ind.style.transform=""; ind.classList.remove("show"); return; }
    const d=Math.min(dy*0.55,120); ind.classList.add("show"); ind.style.transform=`translate(-50%,${d}px)`; armed=dy*0.55>=TH;
    ic.style.transform=`rotate(${armed?180:Math.min(dy*1.2,170)}deg)`; tx.textContent=armed?"Suelten para actualizar":"Deslicen para actualizar"; ind.classList.toggle("armed",armed); },{passive:true});
  addEventListener("touchend",()=>{ if(y0==null) return; y0=null;
    if(armed){ ind.classList.add("loading"); tx.textContent="Actualizando…"; ic.textContent="↻"; setTimeout(hardReload,250); }
    else { ind.style.transform=""; ind.classList.remove("show","armed"); } },{passive:true});
})();
function hardReload(){ try{ stopVoice(); }catch(e){} location.replace(location.pathname+"?v="+Date.now()); }
/* avisa si hay una versión publicada más nueva que la que está abierta */
async function checkUpdate(){
  try{ const r=await fetch(location.pathname+"?check="+Date.now(),{cache:"no-store"}); if(!r.ok) return;
    const m=(await r.text()).match(/<meta name="build" content="([^"]+)"/); if(!m||m[1]===BUILD) return;
    const onTrip=!$("#app").classList.contains("hidden")&&STOPS.length&&view!=="plan";
    if(!onTrip&&!speaking) hardReload(); else toast("✨ Hay una versión nueva. Deslicen hacia abajo para actualizar.");
  }catch(e){}
}
if(location.protocol.startsWith("http")){ setTimeout(checkUpdate,2500); document.addEventListener("visibilitychange",()=>{ if(document.visibilityState==="visible") checkUpdate(); }); }
