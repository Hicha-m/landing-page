'use strict';
const $$ = (selector, base=document) => [...base.querySelectorAll(selector)];
const $ = selector => document.querySelector(selector);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Reveal sections as they enter the viewport.
if('IntersectionObserver' in window && !reduceMotion){
 const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target)}}),{threshold:.10,rootMargin:'0px 0px -25px 0px'});
 $$('.reveal').forEach(el=>revealObserver.observe(el));
}else{$$('.reveal').forEach(el=>el.classList.add('visible'))}
// The fixed progress line and gentle depth effect.
let ticking=false;
function onScroll(){if(ticking)return;ticking=true;requestAnimationFrame(()=>{const max=document.documentElement.scrollHeight-window.innerHeight;$('.progress').style.width=(max?window.scrollY/max*100:0)+'%';if(!reduceMotion && window.innerWidth>790){const item=$('[data-parallax]');if(item&&window.scrollY<800){item.style.transform=`translate3d(0,${Math.min(70,window.scrollY*.07)}px,0)`}}ticking=false})}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
// Responsive mobile menu.
const toggle=$('.menu-toggle');toggle.addEventListener('click',()=>{const open=$('.navlinks').classList.toggle('show');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu')});$$('.navlinks a').forEach(a=>a.addEventListener('click',()=>{$('.navlinks').classList.remove('show');toggle.setAttribute('aria-expanded','false')}));
// Horizontally draggable, keyboard-accessible sliders.
$$('.card-track,.template-track').forEach(track=>{let pressed=false,origin=0,start=0,moved=false;
 track.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;pressed=true;moved=false;origin=e.clientX;start=track.scrollLeft;track.classList.add('dragging');if(e.pointerType==='mouse')track.setPointerCapture(e.pointerId)});
 track.addEventListener('pointermove',e=>{if(!pressed)return;const delta=e.clientX-origin;if(Math.abs(delta)>6)moved=true;track.scrollLeft=start-delta});
 function end(){pressed=false;track.classList.remove('dragging')};track.addEventListener('pointerup',end);track.addEventListener('pointercancel',end);track.addEventListener('lostpointercapture',end);
 track.addEventListener('click',e=>{if(moved){e.preventDefault();e.stopPropagation();moved=false}},true);
 track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();track.scrollBy({left:(e.key==='ArrowRight'?1:-1)*330,behavior:reduceMotion?'instant':'smooth'})}});
 track.addEventListener('scroll',()=>{if(track.id==='template-track'){const first=track.querySelector('.template-card');const step=first?first.getBoundingClientRect().width+30:395;const index=Math.min(4,Math.max(1,Math.round(track.scrollLeft/step)+1));$('#template-index').textContent=String(index).padStart(2,'0')}},{passive:true});
});
$$('button[data-slider]').forEach(btn=>btn.addEventListener('click',()=>{const track=document.getElementById(btn.dataset.slider),card=track.firstElementChild;track.scrollBy({left:Number(btn.dataset.dir)*(card.getBoundingClientRect().width+parseFloat(getComputedStyle(track).gap||0)),behavior:reduceMotion?'instant':'smooth'})}));
// Count-up stats with accessibility-preserving original labels.
if(!reduceMotion && 'IntersectionObserver' in window){let io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target;io.unobserve(el);const target=+el.dataset.count,pre=el.dataset.prefix||'',suffix=el.dataset.suffix||'',started=performance.now();const step=now=>{const progress=Math.min(1,(now-started)/1400),eased=1-Math.pow(1-progress,4);el.textContent=pre+Math.round(target*eased)+suffix;if(progress<1)requestAnimationFrame(step)};requestAnimationFrame(step)}),{threshold:.5});$$('[data-count]').forEach(el=>io.observe(el))}
// Demonstration-only domain input (never invents registrar availability).
$('#domain-form').addEventListener('submit',e=>{e.preventDefault();const term=$('#domain-input').value.trim().toLowerCase().replace(/\s+/g,'').replace(/[^a-z0-9.-]/g,'');const result=$('#domain-result');if(term.length<2){result.textContent='Enter a name with at least two letters or numbers.';return}result.textContent=`“${term.includes('.')?term:term+'.com'}” — search preview only. Connect a registrar API for actual domain availability.`;});
// Interactive design editor controls.
$$('.tool-item').forEach(btn=>btn.addEventListener('click',()=>{$$('.tool-item').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const region=$('.editor-canvas');const choice=btn.textContent.toLowerCase();region.style.background=choice.includes('colors')?'#d5c5e5':choice.includes('typography')?'#e5e2bd':choice.includes('layouts')?'#c9dfd3':choice.includes('animations')?'#d9c2b5':'#e8d9c8';}));
// Modal video: keyboard Escape, background play/pause and focus control.
const modal=$('#video-modal'),modalVideo=$('#modal-video'),videoButton=$('.video-play'),closeButton=$('.modal-close');let previousFocus=null;
function closeVideo(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');modalVideo.pause();document.body.style.overflow='';previousFocus?.focus()}
videoButton.addEventListener('click',()=>{previousFocus=document.activeElement;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';closeButton.focus();modalVideo.play().catch(()=>{})});closeButton.addEventListener('click',closeVideo);modal.addEventListener('click',e=>{if(e.target===modal)closeVideo()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeVideo()});
// Do not play a background video if the visitor prefers reduced motion.
if(reduceMotion){$$('video[autoplay]').forEach(v=>v.pause())}