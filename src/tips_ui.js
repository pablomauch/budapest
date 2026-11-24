/* ---- guía práctica ---- */
function renderTips(){
  $("#tipsList").innerHTML=TIPS.map((s,i)=>`<details class="tip" ${i===0?"open":""}><summary><span class="ti">${s.ic}</span><b>${s.t}</b><span class="chev">›</span></summary><div class="tipb">${s.words?`<p style="color:var(--mute);margin:0 0 8px">Toquen una palabra para escucharla en húngaro.</p>`+s.words.map((w,k)=>`<button class="word" data-w="${k}"><b>${w[0]}</b><span>${w[1]}</span><em>${w[2]}</em><i>🔊</i></button>`).join(""):s.h}</div></details>`).join("");
  document.querySelectorAll("#tipsList [data-open]").forEach(a=>{ a.href="#"; a.onclick=e=>{ e.preventDefault(); openTips(false); openPlace(a.dataset.open); }; });
  const W=TIPS.find(s=>s.words).words;
  document.querySelectorAll("#tipsList [data-w]").forEach(b=>b.onclick=()=>sayHU(W[+b.dataset.w][0]));
}
function sayHU(t){ try{ unlockAudio(); const s=window.speechSynthesis; if(!s) return; s.cancel(); const u=new SpeechSynthesisUtterance(t.replace(" / ",", ")); u.lang="hu-HU"; const v=s.getVoices().find(v=>/^hu/i.test(v.lang)); if(v) u.voice=v; u.rate=.85; s.speak(u); if(!v) toast("Si suena raro, bajen la voz Húngaro en Ajustes → Accesibilidad → Contenido leído"); }catch(e){} }
function openTips(on){ if(on) renderTips(); $("#tips").classList.toggle("on",on); $("#tipsBg").classList.toggle("on",on); if(on) $("#tips").scrollTop=0; }
$("#bTips").onclick=()=>{ enterApp(); goPlanner(); openTips(true); };
$("#bTips2").onclick=()=>openTips(true);
$("#tipsBg").onclick=()=>openTips(false); $("#tipsClose").onclick=()=>openTips(false);
