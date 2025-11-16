// ====== Hero slider ======
const slides = Array.from(document.querySelectorAll('.slide'));
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let current = 0;
const AUTO_INTERVAL = 4500;
let autoTimer=null;

// create dots
slides.forEach((s, idx)=>{
  const dot=document.createElement('button');
  dot.className='dot'+(idx===0?' active':'');
  dot.dataset.index=idx;
  dotsContainer.appendChild(dot);
});
const dots = Array.from(document.querySelectorAll('.dot'));

function goTo(index){
  slides.forEach(s=>s.classList.remove('active'));
  dots.forEach(d=>d.classList.remove('active'));
  current=(index+slides.length)%slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

function next(){ goTo(current+1); }
function prev(){ goTo(current-1); }

nextBtn.addEventListener('click', ()=>{ pauseAuto(); next(); });
prevBtn.addEventListener('click', ()=>{ pauseAuto(); prev(); });
dots.forEach(d=>d.addEventListener('click',(e)=>{ pauseAuto(); goTo(Number(e.target.dataset.index)); }));

function startAuto(){ stopAuto(); autoTimer=setInterval(next,AUTO_INTERVAL); }
function stopAuto(){ if(autoTimer) clearInterval(autoTimer); autoTimer=null; }
function pauseAuto(){ stopAuto(); setTimeout(startAuto,AUTO_INTERVAL*1.1); }
startAuto();

const slider = document.querySelector('.hero-slider');
slider.addEventListener('mouseenter', stopAuto);
slider.addEventListener('mouseleave', startAuto);

// ===== Dark Mode =====
const darkToggle=document.getElementById('darkModeToggle');
if(localStorage.getItem('buildproDark')==='true'){ document.body.classList.add('dark'); darkToggle.innerHTML='<i class="fa-solid fa-sun"></i>'; }
darkToggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  const dark= document.body.classList.contains('dark');
  localStorage.setItem('buildproDark', dark);
  darkToggle.innerHTML=dark?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>';
});

// ===== Mobile Menu Toggle =====
document.getElementById('menuToggle').addEventListener('click',()=>{
  document.querySelector('.nav-links').classList.toggle('active');
});

// ===== MATERIALS DYNAMIC CARDS =====
const materialData = {
  steel:[ {img:'images/steel.jpg',title:'Rebars (TMT)',desc:'High-quality TMT rebars for construction.'},
          {img:'images/steel.jpg',title:'Structural Steel (I-beams)',desc:'Durable steel I-beams for structures.'},
          {img:'images/steel.jpg',title:'Sheets & Plates',desc:'Steel sheets & plates of various sizes.'}],
  wood:[ {img:'images/woods.jpg',title:'Timber',desc:'Hardwood and softwood timber.'},
         {img:'images/woods.jpg',title:'Plywood & MDF',desc:'High-quality plywood sheets.'},
         {img:'images/woods.jpg',title:'Treated Lumber',desc:'Weather-resistant treated lumber.'}],
  blocks:[ {img:'images/blocks.jpg',title:'Hollow Concrete Blocks',desc:'Standard hollow blocks.'},
           {img:'images/blocks.jpg',title:'Solid Blocks',desc:'Strong solid masonry blocks.'}],
  concrete:[ {img:'images/concrete.jpg',title:'Ready-Mix Concrete',desc:'High-strength ready-mix.'},
             {img:'images/concrete.jpg',title:'Sand & Gravel',desc:'Fine & coarse aggregates.'}],
  mortars:[ {img:'images/mortars.jpg',title:'Mortar Mixes',desc:'Ready-to-use mortar mixes.'},
            {img:'images/mortars.jpg',title:'Waterproofing',desc:'Concrete waterproofing solutions.'}],
  other:[ {img:'images/other.jpg',title:'Paints & Coatings',desc:'Decorative & protective coatings.'},
          {img:'images/other.jpg',title:'Tools & Safety Gear',desc:'Construction tools and PPE.'}]
};

function renderMaterialCards(category){
  const container=document.getElementById('materialsCards');
  container.innerHTML='';
  if(!materialData[category]){ container.innerHTML='<p style="color:#666">No materials available.</p>'; return; }
  materialData[category].forEach(m=>{
    const card=document.createElement('div'); card.className='material-card';
    card.innerHTML=`<img src="${m.img}" alt="${m.title}"><h3>${m.title}</h3><p>${m.desc}</p><button class="btn-quote">Request Quote</button>`;
    container.appendChild(card);
  });

  // Quote buttons
  container.querySelectorAll('.btn-quote').forEach(btn=>{
    btn.addEventListener('click',()=>{ openModal(); });
  });
}

// MATERIAL ITEMS click
document.querySelectorAll('.material-item').forEach(item=>{
  item.addEventListener('click',()=>{ renderMaterialCards(item.dataset.material); });
});

// ===== Quote Modal =====
const modal=document.getElementById('quoteModal');
const quoteClose=document.getElementById('quoteClose');
const quoteCancel=document.getElementById('quoteCancel');

function openModal(){ modal.style.display='flex'; modal.setAttribute('aria-hidden','false'); }
function closeModal(){ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); }

quoteClose.addEventListener('click', closeModal);
quoteCancel.addEventListener('click', closeModal);
window.addEventListener('click', e=>{ if(e.target===modal) closeModal(); });
document.getElementById('quoteForm').addEventListener('submit', e=>{ e.preventDefault(); alert('Quote request sent!'); closeModal(); });
