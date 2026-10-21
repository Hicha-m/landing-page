'use strict';
const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const menu=$('.menu-toggle'),menuPanel=$('#nav-menu');
menu.addEventListener('click',()=>{const open=menuPanel.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu')});
$$('#nav-menu a').forEach(link=>link.addEventListener('click',()=>{menuPanel.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuPanel.classList.contains('open')){menuPanel.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus()}});
if('IntersectionObserver' in window&&!reduced){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.09,rootMargin:'0px 0px -30px 0px'});$$('.reveal').forEach(el=>observer.observe(el))}else{$$('.reveal').forEach(el=>el.classList.add('visible'))}
const track=$('.quotes-track');
$$('[data-quote-dir]').forEach(button=>button.addEventListener('click',()=>{const item=track.querySelector('.quote-card');const distance=item.getBoundingClientRect().width+22;track.scrollBy({left:Number(button.dataset.quoteDir)*distance,behavior:reduced?'instant':'smooth'})}));
track.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();track.scrollBy({left:event.key==='ArrowRight'?440:-440,behavior:reduced?'instant':'smooth'})}});
if(window.matchMedia){matchMedia('(min-width:801px)').addEventListener('change',e=>{if(e.matches){menuPanel.classList.remove('open');menu.setAttribute('aria-expanded','false')}})}
