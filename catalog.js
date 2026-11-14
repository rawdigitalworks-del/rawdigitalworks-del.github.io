/* Single source of truth for the store. Edit here; Home and Store pages both read it. */
const CATS=[
 {id:'careers',name:'Careers',blurb:'Resume templates, cover letters and interview answers.',icon:'📄'},
 {id:'ebooks',name:'E-books',blurb:'Short practical PDFs for job seekers and side income.',icon:'📘'},
 {id:'telugu',name:'Telugu · Home business',blurb:'Ready posts and tools for home sellers, in Telugu.',icon:'🧁'},
 {id:'free',name:'Free downloads',blurb:'Start free: resume template and interview guides.',icon:'🎁'}
];
const PRODUCTS=[
 {id:'career-pack',cat:'careers',name:'RDW Career Pack',tag:'Most popular',price:299,desc:'3 ATS resume templates, 3 cover letters, LinkedIn guide, 200 interview answers and 10 AI prompts.',url:'career-pack.html',buy:'https://rzp.io/rzp/rdw-career-pack'},
 {id:'get-shortlisted',cat:'ebooks',name:'Get Shortlisted',tag:'Launch price',price:99,desc:'The 30-day interview-call plan for Indian freshers.',url:'ebook-get-shortlisted.html',buy:'https://rzp.io/rzp/rdw-get-shortlisted',img:'ebook-get-shortlisted.jpg'},
 {id:'ai-proof',cat:'ebooks',name:'AI-Proof Your Career',tag:'Launch price',price:129,desc:'A 21-day ChatGPT skills plan for jobs in India.',url:'ebook-ai-proof-career.html',buy:'https://rzp.io/rzp/rdw-ai-proof-career',img:'ebook-ai-proof-career.jpg'},
 {id:'safe-side',cat:'ebooks',name:'Safe Side Income with AI',tag:'Launch price',price:149,desc:'Find your first paying client in 30 days, without scams.',url:'ebook-safe-side-income-ai.html',buy:'https://rzp.io/rzp/rdw-safe-side-income',img:'ebook-safe-side-income-ai.jpg'},
 {id:'bundle',cat:'ebooks',name:'All 3 e-books bundle',tag:'Save ₹28',price:249,desc:'Get Shortlisted + AI-Proof Your Career + Safe Side Income with AI.',url:'ebooks.html'},
 {id:'home-baker',cat:'telugu',name:'Home Baker Pack',tag:'New · Telugu',price:149,desc:'30 designed Telugu posts with captions and a Post Maker tool for home bakers.',url:'home-baker-pack.html',buy:'https://rzp.io/rzp/rdw-home-baker-pack'},
 {id:'starter-kit',cat:'free',name:'Career Starter Kit',tag:'Free',price:0,desc:'Fresher ATS resume template (.docx) + 10 AI prompts for job hunting.',url:'free-resume-template.html'},
 {id:'g-ats',cat:'free',name:'ATS resume format for freshers',tag:'Free guide',price:0,desc:'What recruiter software can and cannot read.',url:'ats-resume-format.html'},
 {id:'g-intro',cat:'free',name:'"Tell me about yourself"',tag:'Free guide',price:0,desc:'A simple answer structure with examples.',url:'tell-me-about-yourself.html'},
 {id:'g-hr',cat:'free',name:'Top 15 HR interview questions',tag:'Free guide',price:0,desc:'The questions that come up most, and how to answer them.',url:'hr-interview-questions.html'}
];
const _e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function pcard(p){const price=p.price?'₹'+p.price:'Free';
 const cover=p.img?`<a class="cover" href="${p.url}"><img src="${p.img}" alt="${_e(p.name)} cover" loading="lazy" width="600" height="849"></a>`:'';
 const buy=p.buy?`<a class="btn primary" href="${p.buy}" rel="noopener">Buy now - ${price}</a>`:(p.price?`<a class="btn primary" href="${p.url}">See bundle - ${price}</a>`:`<a class="btn primary" href="${p.url}">Get it free</a>`);
 const more=(p.buy||!p.price)?`<a class="btn ghost" href="${p.url}">${p.price?"What's inside":'Details'}</a>`:'';
 return `<article class="card product pc" data-cat="${p.cat}">${cover}<span class="status ${p.price?'live':'testing'}">${_e(p.tag)}</span><h3>${_e(p.name)}</h3><p>${_e(p.desc)}</p><div class="pc-foot"><div class="price">${price}</div><div class="pc-btns">${buy} ${more}</div></div></article>`;}
