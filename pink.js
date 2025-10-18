// 🔤 Language toggle
(function(){
  const langBtn = document.getElementById('langBtn');
  let lang = 'en'; // ✅ اللغة الافتراضية هي الإنجليزية

  // 🟢 دالة لتطبيق اللغة على كل العناصر
  function applyLanguage() {
    document.querySelectorAll('[data-en]').forEach(el=>{
      el.textContent = (lang === 'en') ? el.getAttribute('data-en') : el.getAttribute('data-ar');
    });
    document.documentElement.lang = (lang === 'en') ? 'en' : 'ar';
    document.body.dir = (lang === 'en') ? 'ltr' : 'rtl';
    langBtn.textContent = (lang === 'en') ? 'Ar' : 'En';
  }

  // ⚡ تطبيق اللغة الإنجليزية أول ما يفتح الموقع
  applyLanguage();

  // 🔁 عند الضغط على الزر
  langBtn.addEventListener('click', () => {
    lang = (lang === 'en') ? 'ar' : 'en';
    applyLanguage();
  });
})();

// 🌙 تبديل الوضع الليلي
const modeBtn = document.getElementById('modeBtn');
modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  modeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// 💬 العبارات التحفيزية بلغتين
const quotes = [
  { ar: "كل يوم هو فرصة جديدة للابتسامة 🌸", en: "Every day is a new opportunity to smile 🌸" },
  { ar: "القوة الحقيقية تكمن في الصبر والإيمان 💪", en: "True strength lies in patience and faith 💪" },
  { ar: "لا تفقدي الأمل أبداً، فالغد أفضل 🌈", en: "Never lose hope, tomorrow will be better 🌈" },
  { ar: "ابتسمي حتى في أصعب اللحظات 😄", en: "Smile even in the toughest moments 😄" },
  { ar: "الصحة تاج على رؤوس الأصحاء 👑", en: "Health is a crown on the heads of the healthy 👑" },
  { ar: "كل فحص مبكر خطوة نحو الأمان 💖", en: "Every early checkup is a step towards safety 💖" },
  { ar: "كوني قوية، أنتِ لست وحدك 🌸", en: "Be strong, you are not alone 🌸" },
  { ar: "التفاؤل شفاء للقلب 💓", en: "Optimism is healing for the heart 💓" },
  { ar: "الاهتمام بنفسك هو أول خطوة للتعافي 🌺", en: "Taking care of yourself is the first step to recovery 🌺" },
  { ar: "التحديات تصنع الأبطال 🏆", en: "Challenges create champions 🏆" },
  { ar: "ابتسامتك قوتك الداخلية 😍", en: "Your smile is your inner strength 😍" },
  { ar: "كل لحظة حياة تستحق الامتنان 🌷", en: "Every moment of life deserves gratitude 🌷" },
  { ar: "الفحص المبكر ينقذ الأرواح 🌟", en: "Early detection saves lives 🌟" },
  { ar: "قلبك مليء بالشجاعة 💖", en: "Your heart is full of courage 💖" },
  { ar: "الأمل نور لا ينطفئ أبداً ✨", en: "Hope is a light that never fades ✨" }
];

let currentIndex = 0;
const quoteEl = document.getElementById("motivational-quote");

// 🈯️ تحديد اللغة الحالية من <html>
function getCurrentLang() {
  return document.documentElement.lang || "en"; // ✅ الإنجليزية افتراضية الآن
}

// 🎯 عرض العبارة حسب اللغة
function showQuote() {
  const lang = getCurrentLang();
  quoteEl.textContent = quotes[currentIndex][lang];
  currentIndex = (currentIndex + 1) % quotes.length;
}

// ⏱️ تغيير العبارة كل 10 ثواني
showQuote();
setInterval(showQuote, 10000);

// 🔁 تحديث العبارة عند تغيير اللغة
const observer = new MutationObserver(() => {
  showQuote();
});

observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  nav.classList.toggle('active');
});
// JavaScript
const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

});
// زر القائمة
const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("active");
});




