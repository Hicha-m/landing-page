"use strict";
const $=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s));
const menu=$(".menu-toggle"),panel=$("#main-menu");
menu.addEventListener("click",()=>{const open=panel.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Fermer le menu":"Ouvrir le menu")});
$$(".nav-links a").forEach(link=>link.addEventListener("click",()=>{panel.classList.remove("open");menu.setAttribute("aria-expanded","false")}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&panel.classList.contains("open")){panel.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.focus()}});
const benefits={food:["Titres-resto","Une maquette de solution pour simplifier le déjeuner au quotidien."],gifts:["Cadeaux","Des occasions à célébrer, réunies dans une expérience créative."],travel:["Mobilité","Une interface imaginaire pour accompagner tous les trajets."],culture:["Culture","Une place pour la musique, les sorties et les découvertes."]};
$$("[data-benefit]").forEach(button=>button.addEventListener("click",()=>{const entry=benefits[button.dataset.benefit];$("#benefit-detail-title").textContent=entry[0];$("#benefit-detail-desc").textContent=entry[1];$$("[data-benefit]").forEach(el=>el.setAttribute("aria-pressed",String(el===button)))}));
const track=$("#testimonial-track");$$("[data-slide]").forEach(button=>button.addEventListener("click",()=>{const card=track.querySelector("article");track.scrollBy({left:Number(button.dataset.slide)*(card.getBoundingClientRect().width+17),behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}));
track.addEventListener("keydown",e=>{if(["ArrowLeft","ArrowRight"].includes(e.key)){e.preventDefault();track.scrollBy({left:e.key==="ArrowRight"?380:-380,behavior:"smooth"})}});


/* Swell V2 — motion pass after Local Page Capture Web sequential capture.
   Original motions inferred from observed page states; not proprietary animation code. */
const reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");
const motionTargets=[
  {element:document.querySelector(".hero-card"),anchor:document.querySelector(".hero"),motion:"hero"},
  {element:document.querySelector(".together-card"),anchor:document.querySelector(".together"),motion:"together"},
  {element:document.querySelector(".phone"),anchor:document.querySelector(".app"),motion:"phone"}
].filter(item=>item.element&&item.anchor);
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
let motionQueued=false;
function updateMotion(){
  motionQueued=false;
  if(reducedMotion.matches){for(const item of motionTargets){item.element.style.removeProperty("--scroll-progress")}document.querySelector(".technology")?.style.removeProperty("--smart-progress");return}
  const vh=window.innerHeight||900;
  const smartSection=document.querySelector(".technology");
  if(smartSection){
    const smartRect=smartSection.getBoundingClientRect();
    const trackLength=Math.max(1,smartRect.height-vh);
    const progress=clamp(-smartRect.top/trackLength,0,1);
    smartSection.style.setProperty("--smart-progress",progress.toFixed(4));
    // Explicit numeric opacity values avoid cross-browser calc() multiplication
    // differences and keep the three illustrated states mutually exclusive.
    const fade1=clamp(1-progress*4,0,1);
    const fade2=clamp(Math.min((progress-.25)*4,(.9-progress)/.15),0,1);
    const fade3=clamp((progress-.75)/.15,0,1);
    smartSection.style.setProperty("--stage-one-opacity",fade1.toFixed(4));
    smartSection.style.setProperty("--stage-two-opacity",fade2.toFixed(4));
    smartSection.style.setProperty("--stage-three-opacity",fade3.toFixed(4));
  }
  for(const item of motionTargets){
    const rect=item.anchor.getBoundingClientRect();
    const progress=clamp((vh-rect.top)/(vh+rect.height),0,1);
    item.element.style.setProperty("--scroll-progress",progress.toFixed(4));
  }
}
function queueMotion(){if(!motionQueued){motionQueued=true;requestAnimationFrame(updateMotion)}}
window.addEventListener("scroll",queueMotion,{passive:true});
window.addEventListener("resize",queueMotion,{passive:true});
if(reducedMotion.addEventListener)reducedMotion.addEventListener("change",queueMotion);
queueMotion();
const revealTargets=document.querySelectorAll(".statement h2,.statement-cards,.technology-copy,.technology-visual,.section-heading,.benefit,.together-art,.together-text,.solution-card,.app-copy,.app-art,.testimonials-row,.resource-card,.closing-grid");
if("IntersectionObserver" in window&&!reducedMotion.matches){
 const revealObserver=new IntersectionObserver(entries=>{
   for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add("is-in-view");revealObserver.unobserve(entry.target)}}
 },{threshold:0.08,rootMargin:"0px 0px -30px 0px"});
 for(const el of revealTargets){el.classList.add("can-reveal");revealObserver.observe(el)}
}else{for(const el of revealTargets)el.classList.add("is-in-view")}
// Motion is decorative; all content and controls remain accessible without JavaScript.
