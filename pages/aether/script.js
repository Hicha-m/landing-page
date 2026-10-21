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


// ─── Aether impact: original canvas lines, four selectable geometries and six moods.
(()=>{
const canvas=document.getElementById('impact-canvas');
if(!canvas)return;
const ctx=canvas.getContext('2d');
if(!ctx)return;
const stage=canvas.closest('.impact-stage');
const buttons=[...document.querySelectorAll('[data-impact]')];
const themes=[...document.querySelectorAll('[data-impact-theme]')];
const trigger=document.getElementById('theme-trigger');
const themeMenu=document.getElementById('theme-menu');
const captions=['Rayonnement des idées','Réseau sans frontières','Connexions en mouvement','Convergence des possibles'];
const styles={
  night:{bg1:'#181f50',bg2:'#5651d7',bg3:'#9993e7',stroke:[228,236,255]},
  dawn:{bg1:'#211d57',bg2:'#6658dd',bg3:'#c1b2ff',stroke:[232,233,255]},
  sunrise:{bg1:'#f7f5ff',bg2:'#efb6f4',bg3:'#ffdaaf',stroke:[177,40,243]},
  day:{bg1:'#f7faff',bg2:'#d3e7ff',bg3:'#9cc9fa',stroke:[25,79,235]},
  dusk:{bg1:'#383079',bg2:'#815ddf',bg3:'#f2b3c4',stroke:[241,223,255]},
  sunset:{bg1:'#fbf9ff',bg2:'#fbe2c0',bg3:'#ffb77c',stroke:[228,52,150]}
};
let active=0,theme='night',width=0,height=0,phase=0,raf=0,visible=true;
const n=210;
const hash=i=>{const x=Math.sin(i*127.1+4.78)*43758.5453123;return x-Math.floor(x)};
function size(){const bounds=canvas.getBoundingClientRect();if(!bounds.width||!bounds.height)return;const dpr=Math.min(devicePixelRatio||1,2);width=bounds.width;height=bounds.height;canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw()}
function point(i,t){const v=i/n,angle=(v-.5)*Math.PI*1.82;const rx=width*.43,ry=height*.6;const drift=Math.sin(t*.65+i*.045)*height*.018;
 switch(active){
 case 0:{const originX=width*.5,originY=height*1.03;const length=.62+hash(i)*.33;return [originX+Math.sin(angle)*rx*length,originY-Math.cos(angle)*ry*length+drift,originX,originY]}
 case 1:{const a=v*Math.PI*2,tier=hash(i+16)*.55+.37;return [width*.5+Math.cos(a)*rx*tier,height*.88-Math.sin(a)*height*.54*tier+drift,width*.5+Math.cos(a-.85)*rx*.19,height*.73-Math.sin(a-.85)*height*.11]}
 case 2:{const column=v*width*.68+width*.16;const undulate=Math.sin(v*8+t*.25)*height*.09;return [column,height*.19+undulate,column+Math.sin(v*5+t*.2)*width*.027,height*.95]}
 default:{const yy=v*height*.72+height*.19;const blend=Math.sin(v*Math.PI);const spread=(1-blend)*width*.35;const wobble=Math.sin(t*.45+i*.04)*5;const s=(i%2?1:-1);return [width*.5+s*spread+wobble,yy,width*.5, height*.59]}
 }
}
function draw(){
 if(!width||!height)return;
 const col=styles[theme];ctx.clearRect(0,0,width,height);
 const gradient=ctx.createLinearGradient(0,0,width,height);gradient.addColorStop(0,col.bg1);gradient.addColorStop(.55,col.bg2);gradient.addColorStop(1,col.bg3);ctx.fillStyle=gradient;ctx.fillRect(0,0,width,height);
 const glow=ctx.createRadialGradient(width*.5,height*1.03,0,width*.5,height*.94,width*.56);glow.addColorStop(0,'rgba(255,255,255,.35)');glow.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
 ctx.lineWidth=Math.max(.6,width/1350);
 for(let i=0;i<n;i++){const [x,y,ox,oy]=point(i,phase);const opacity=.19+hash(i+50)*.7;const [r,g,b]=col.stroke;ctx.strokeStyle='rgba('+r+','+g+','+b+','+opacity+')';ctx.beginPath();if(active===1){ctx.moveTo(ox,oy);ctx.quadraticCurveTo((x+ox)*.5,height*.12,x,y)}else if(active===3){ctx.moveTo(ox,oy);ctx.quadraticCurveTo(width*.5+(x-width*.5)*.45,(oy+y)*.5,x,y)}else{ctx.moveTo(ox,oy);ctx.lineTo(x,y)}ctx.stroke();if(i%2===0){ctx.fillStyle='rgba('+r+','+g+','+b+','+(opacity*.9)+')';ctx.fillRect(x-1,y-1,2,2)}}
}
function animate(){raf=0;if(reduce||!visible)return;phase+=.025;draw();raf=requestAnimationFrame(animate)}
function resume(){cancelAnimationFrame(raf);raf=0;draw();if(!reduce&&visible)raf=requestAnimationFrame(animate)}
buttons.forEach(btn=>btn.addEventListener('click',()=>{active=Number(btn.dataset.impact);buttons.forEach(b=>{const on=b===btn;b.classList.toggle('is-active',on);b.setAttribute('aria-pressed',String(on))});document.getElementById('impact-view-label').textContent=captions[active]+' · 0'+(active+1)+' / 04';resume()}));
function closeThemes(){themeMenu.hidden=true;trigger.setAttribute('aria-expanded','false')}
trigger.addEventListener('click',()=>{themeMenu.hidden=!themeMenu.hidden;trigger.setAttribute('aria-expanded',String(!themeMenu.hidden))});
themes.forEach(btn=>btn.addEventListener('click',()=>{theme=btn.dataset.impactTheme;stage.dataset.theme=theme;themes.forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));trigger.firstChild.textContent=theme==='night'?'☾ ':theme==='day'?'☀ ':'◉ ';closeThemes();resume()}));
document.addEventListener('click',e=>{if(!e.target.closest('.theme-picker'))closeThemes()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!themeMenu.hidden){closeThemes();trigger.focus()}});
if('ResizeObserver' in window)new ResizeObserver(size).observe(canvas);else window.addEventListener('resize',size);
if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;resume()},{threshold:0}).observe(canvas);
size();resume();
})();

// ─── Product cards: a single accessible modal with demo-only content.
(()=>{
const modal=document.getElementById('solution-modal');if(!modal)return;
const dialog=modal.querySelector('.solution-dialog'),close=modal.querySelector('.solution-close');
const title=modal.querySelector('#solution-title'),description=modal.querySelector('#solution-desc');
const display=modal.querySelector('#solution-art');
const entries={
 payments:['Des paiements qui suivent vos idées.','Imaginez une expérience de commande intuitive, pensée pour les parcours de demain, sur tous les écrans.'],
 billing:['Le bon modèle, au bon moment.','Composez des expériences de facturation et d’abonnement adaptées à votre univers créatif.'],
 commerce:['Une nouvelle façon de découvrir.','Explorez la rencontre entre recommandations intelligentes et interfaces de commerce imaginaires.'],
 issuing:['Une carte à votre image.','Imaginez des moyens de paiement personnalisés sans activer la moindre fonctionnalité bancaire.'],
 global:['Des idées qui traversent le monde.','Donnez à votre projet une perspective internationale grâce à une démonstration de flux connectés.']
};
let previous=null;
function open(id){const item=entries[id];if(!item)return;previous=document.activeElement;title.textContent=item[0];description.textContent=item[1];display.dataset.solution=id;modal.hidden=false;document.body.classList.add('modal-open');close.focus()}
function closeModal(){if(modal.hidden)return;modal.hidden=true;document.body.classList.remove('modal-open');if(previous&&previous.isConnected)previous.focus()}
document.querySelectorAll('[data-solution]').forEach(button=>button.addEventListener('click',()=>open(button.dataset.solution)));
modal.querySelectorAll('[data-close-solution],[data-close-link]').forEach(node=>node.addEventListener('click',closeModal));
modal.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeModal()}else if(e.key==='Tab'){const nodes=[...dialog.querySelectorAll('button:not([disabled]),a[href]')].filter(n=>n.getClientRects().length);if(!nodes.length)return;const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
})();
