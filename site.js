/* SETTINGS — Brevo form action URL (Brevo > Contacts > Forms > form > Share > embed code: <form action="https://...sibforms.com/serve/...">). Empty = popup links to the free template page. */
window.RDW_BREVO_FORM_URL="https://3f563a23.sibforms.com/serve/MUIFAN9rN9_JKhdSI3X9hsS1M8z2Jmw8ena1QxiErk96G0K4yx94QSCzYyHirNz6M4FZJfsaUQXVElOUu5FrUozqcTXTfPxZbQh_k2a46VWtxowT52M82BqIbBGxUb3mR0Hu4NlLUtktcKRUTc-yvWNHL24r9eLggaP9EMFKnzb-UewzTKma-u-TjZVYZgcH2mzIbia6DiuDBN9SBA==";
/* Google Form link for reviews. Empty = review.html sends the review on WhatsApp. */
window.RDW_REVIEW_FORM_URL="";
/* Shared header/footer and mobile menu. */
const PAGES=[['index.html','Home'],['index.html#shop','Store'],['career-pack.html','Career Pack'],['ebooks.html','E-books'],['free-resume-template.html','Free Template'],['guides.html','Guides'],['about.html','About'],['contact.html','Contact']];
const here=location.pathname.split('/').pop()||'index.html';
document.getElementById('top').innerHTML=`<div class="wrap nav"><a class="brand" href="index.html"><img src="logo-96.jpg" alt="Raw Digital Works logo" width="38" height="38">RAW DIGITAL WORKS</a>
<button class="menu" aria-label="Menu" onclick="document.querySelector('.links').classList.toggle('open')">☰</button>
<nav class="links">${PAGES.map(([h,t])=>`<a href="${h}" class="${h===here?'on':''}">${t}</a>`).join('')}<a class="btn primary" href="free-resume-template.html">Free resume template</a></nav></div>`;
document.getElementById('foot').innerHTML=`<div class="wrap"><div class="fgrid"><div><a class="brand" href="index.html"><img src="logo-96.jpg" alt="Raw Digital Works logo" width="38" height="38">RAW DIGITAL WORKS</a><p>Simple digital products made in Nellore, India: career kits today; e-books, AI money guides, automation tools and AI courses coming soon.</p></div>
<div><h4>Kits &amp; guides</h4><a href="career-pack.html">RDW Career Pack (₹299)</a><a href="ebooks.html">E-books (from ₹99)</a><a href="free-resume-template.html">Free resume template</a><a href="ats-resume-format.html">ATS resume format</a><a href="tell-me-about-yourself.html">Tell me about yourself</a><a href="hr-interview-questions.html">HR interview questions</a></div>
<div><h4>Company</h4><a href="about.html">About</a><a href="contact.html">Contact</a><a href="terms.html">Terms &amp; licence</a><a href="refunds.html">Refund policy</a><a href="privacy.html">Privacy</a></div>
<div><h4>Follow us</h4><a href="https://www.youtube.com/channel/UC-OIkKJ0WOBZ15-MAjQibIQ" target="_blank" rel="noopener">YouTube (Adventure Ajay)</a><a href="https://www.instagram.com/rawdigitalworks" target="_blank" rel="noopener">Instagram</a><a href="https://www.facebook.com/102378375642953" target="_blank" rel="noopener">Facebook</a></div></div>
<p class=\"risk\">We help you prepare; hiring decisions are made by employers. We do not guarantee interviews or jobs. © ${new Date().getFullYear()} RAW DIGITAL WORKS.</p></div>`;
/* Conversion: sticky buy bar, real reviews, free-template lead capture. */
(function(){
const d=document.body.dataset,ls={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
if(d.buy){
 const bar=document.createElement('div');bar.className='buybar';
 bar.innerHTML=`<div class="wrap bb"><span class="bb-t"><b>${d.name}</b><small>Instant download · UPI / cards</small></span><a class="btn primary" href="${d.buy}" rel="noopener">Buy now ₹${d.price}</a></div>`;
 document.body.appendChild(bar);document.body.classList.add('has-buybar');
 const s=document.createElement('script');s.src='reviews.js';s.onload=()=>{const r=(window.RDW_REVIEWS||{})[d.pid]||[];if(!r.length)return;
  const sec=document.createElement('section');sec.id='reviews';sec.innerHTML=`<div class="wrap"><h2>What buyers say</h2><div class="grid g2">${r.map(x=>`<div class="card"><p>“${x.t.replace(/</g,'&lt;')}”</p><p style="color:var(--muted)">— ${x.n.replace(/</g,'&lt;')}</p></div>`).join('')}</div></div>`;
  const q=[...document.querySelectorAll('h2')].find(h=>h.textContent.trim()==='Questions');const at=q?q.closest('section'):document.querySelector('main').lastElementChild;at.parentNode.insertBefore(sec,at);};
 document.head.appendChild(s);
}
if(/free-resume-template|thanks|review/.test(here))return;
const URL_=window.RDW_BREVO_FORM_URL||'';
const formHTML=URL_?`<form class="lead-f"><input type="email" name="EMAIL" required placeholder="Your email" autocomplete="email"><input type="text" name="email_address_check" value="" tabindex="-1" autocomplete="off" style="display:none"><input type="hidden" name="locale" value="en"><button class="btn primary">Send me the template</button></form><p class="tiny">Free. One email with the template, then occasional job tips. Unsubscribe anytime.</p>`:`<a class="btn primary" href="free-resume-template.html">Get the free template</a>`;
const box=c=>`<div class="leadbox ${c}"><h3>Free ATS resume template</h3><p>One-column Word resume that recruiter software can read, plus 10 AI job prompts.</p>${formHTML}<p class="lead-ok" hidden>Done ✔ <a href="RDW_Career_Starter_Kit_FREE.zip" download>Download your template now</a>.</p></div>`;
function wire(root){const f=root.querySelector('.lead-f');if(!f)return;f.onsubmit=e=>{e.preventDefault();fetch(URL_,{method:'POST',mode:'no-cors',body:new FormData(f)}).catch(()=>{}).finally(()=>{f.hidden=true;root.querySelector('.tiny').hidden=true;root.querySelector('.lead-ok').hidden=false;ls.set('rdw_lead','1');});};}
const main=document.querySelector('main');if(main){const sec=document.createElement('section');sec.className='alt';sec.innerHTML=`<div class="wrap">${box('inline')}</div>`;main.appendChild(sec);wire(sec);}
if(ls.get('rdw_lead')||Date.now()-(+ls.get('rdw_pop')||0)<6048e5)return;
let shown=false;function pop(){if(shown)return;shown=true;ls.set('rdw_pop',Date.now());const m=document.createElement('div');m.className='pop';m.setAttribute('role','dialog');m.setAttribute('aria-label','Free ATS resume template');
 m.innerHTML=`<div class="pop-in"><button class="pop-x" aria-label="Close">×</button>${box('')}</div>`;document.body.appendChild(m);wire(m);
 m.onclick=e=>{if(e.target===m||e.target.classList.contains('pop-x'))m.remove();};}
if(matchMedia('(hover:hover) and (min-width:900px)').matches)document.addEventListener('mouseout',e=>{if(!e.relatedTarget&&e.clientY<=0)pop();});
else addEventListener('scroll',()=>{if(scrollY>(document.body.scrollHeight-innerHeight)*.6)pop();},{passive:true});
})();
