// اسکرول نرم + ظاهر شدن بخش‌ها
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); } });
},{threshold:.2});
faders.forEach(f=>observer.observe(f));

// آکاردئون FAQ
document.querySelectorAll('.accordion-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    btn.parentElement.classList.toggle('active');
  });
});

// فرم تماس
document.getElementById("contactForm").addEventListener("submit", e=>{
  e.preventDefault();
  alert("پیام شما ارسال شد ✅");
});
