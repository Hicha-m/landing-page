'use strict';
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $$=(s,root=document)=>[...root.querySelectorAll(s)];
const $=s=>document.querySelector(s);
const menu=$('.mobile-toggle'),menuPanel=$('#nav-menu');
menu.addEventListener('click',()=>{const open=menuPanel.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu')});
$$('#nav-menu a').forEach(a=>a.addEventListener('click',()=>{menuPanel.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const progress=$('.reading-progress');let busy=false;
window.addEventListener('scroll',()=>{if(busy)return;busy=true;requestAnimationFrame(()=>{const extent=document.documentElement.scrollHeight-innerHeight;progress.style.width=(extent>0?scrollY/extent*100:0)+'%';busy=false})},{passive:true});
const items=$$('.reveal');if('IntersectionObserver' in window&&!reduce){const io=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}},{threshold:.07,rootMargin:'0px 0px -20px 0px'});items.forEach(el=>io.observe(el))}else items.forEach(el=>el.classList.add('visible'));
const snippets={
 js:`// Extrait conceptuel — API fictive
const aether = createDemoClient({
  mode: 'sandbox'
});

const payment = await aether.payments.create({
  amount: 2490,
  currency: 'eur',
  customer: 'demo_customer'
});

console.log(payment.status); // "succeeded"`,
 py:`# Extrait conceptuel — API fictive
from fictional_aether import DemoClient

client = DemoClient(mode="sandbox")

payment = client.payments.create(
    amount=2490,
    currency="eur",
    customer="demo_customer"
)

print(payment.status)  # "succeeded"`,
 curl:`# Extrait conceptuel — endpoint fictif
curl https://api.example.invalid/payments \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 2490,
    "currency": "eur",
    "customer": "demo_customer"
  }'

# Aucun paiement réel n'est effectué.`
};
const code=$('#code-content code'),codePanel=$('#code-content'),tabs=$$('[data-code]');
function selectSnippet(key,focus=false){code.textContent=snippets[key];for(const tab of tabs){const active=tab.dataset.code===key;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;if(active)codePanel.setAttribute('aria-labelledby',tab.id);if(active&&focus)tab.focus()}}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectSnippet(tab.dataset.code));tab.addEventListener('keydown',e=>{if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight'&&e.key!=='Home'&&e.key!=='End')return;e.preventDefault();let next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(index+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;selectSnippet(tabs[next].dataset.code,true)})});
selectSnippet('js');
$('#copy-code').addEventListener('click',async()=>{const b=$('#copy-code span');try{await navigator.clipboard.writeText(code.textContent);b.textContent='Copié !'}catch{b.textContent='Sélectionnez le code'}setTimeout(()=>{b.textContent='Copier'},1500)});
const slider=$('.stories-track');
$$('.slider-btn').forEach(btn=>btn.addEventListener('click',()=>{const card=slider.querySelector('.story-card');const gap=parseFloat(getComputedStyle(slider).gap)||0;slider.scrollBy({left:Number(btn.dataset.direction)*(card.getBoundingClientRect().width+gap),behavior:reduce?'instant':'smooth'})}));
slider.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();slider.scrollBy({left:e.key==='ArrowRight'?360:-360,behavior:reduce?'instant':'smooth'})}});
let down=false,x0=0,start=0,dragged=false;slider.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;down=true;dragged=false;x0=e.clientX;start=slider.scrollLeft;if(e.pointerType==='mouse')slider.setPointerCapture(e.pointerId)});
slider.addEventListener('pointermove',e=>{if(!down)return;const d=e.clientX-x0;if(Math.abs(d)>7)dragged=true;slider.scrollLeft=start-d});
function stop(){down=false}slider.addEventListener('pointerup',stop);slider.addEventListener('pointercancel',stop);slider.addEventListener('lostpointercapture',stop);slider.addEventListener('click',e=>{if(dragged){e.preventDefault();e.stopPropagation();dragged=false}},true);
if(reduce){$$('.aurora').forEach(e=>e.style.animation='none')}
