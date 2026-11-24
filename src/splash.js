/* ======================= LANZADOR ======================= */
(function splash(){
  const el=$("#splash"); if(!el) return;
  const imgs=[PH.parlN,PH.chainN,PH.bastion,PH.sunset,PH.szech];
  const box=$("#spImgs");
  imgs.forEach(u=>{ const d=document.createElement("div"); d.className="sp-img"; d.style.backgroundImage=`url("${u}")`; box.appendChild(d); });
  const ims=[...box.children], lines=[...$("#spLines").children];
  const STEP=1900, TOTAL=STEP*lines.length+1400;
  let i=0, done=false;
  function show(n){
    ims.forEach((e,k)=>{ if(k===n%ims.length){ e.classList.remove("on"); void e.offsetWidth; e.classList.add("on"); } else e.classList.remove("on"); });
    lines.forEach((p,k)=>{ p.classList.toggle("on",k===n); p.classList.toggle("gone",k<n); });
  }
  show(0);
  const t=setInterval(()=>{ i++; if(i<lines.length) show(i); else clearInterval(t); },STEP);
  requestAnimationFrame(()=>{ const b=$("#spBar"); b.style.transitionDuration=TOTAL+"ms"; b.style.width="100%"; });
  function finish(){ if(done) return; done=true; clearInterval(t); el.classList.add("out"); setTimeout(()=>el.remove(),1000); }
  const auto=setTimeout(finish,TOTAL);
  el.addEventListener("click",()=>{ clearTimeout(auto); finish(); });
})();
