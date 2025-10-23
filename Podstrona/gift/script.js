const navbar = document.querySelector('.rolka');
const triggerScroll = window.innerHeight * 0.7; 

window.addEventListener('scroll', () => {
  if (window.scrollY > triggerScroll) {
    navbar.classList.add('active'); 
  } else {
    navbar.classList.remove('active');
  }
});
const przycisk = document.querySelector('.rolka-przycisk');
const menu = document.querySelector('.rolka-menu');

przycisk.addEventListener('click', () => {
  przycisk.classList.toggle('aktywny');
  menu.classList.toggle('aktywny');
});


(() => {
  const container = document.querySelector('.final-image .heart-layer');
  if (!container) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // 🌹 Ustawienia – 1 serce na 2 sekundy
  const EMIT_EVERY_MS = 2000;    // co 2 sekundy
  const LIFE_MIN = 5000;
  const LIFE_MAX = 7000;
  const SCALE_MIN = 0.9;
  const SCALE_MAX = 1.2;
  const OFFSET_RADIUS = 150;     // szerokie rozproszenie

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function emitHeart() {
    if (document.hidden) return;

    const heart = document.createElement('div');
    heart.className = 'Serce';

    const dur = rand(LIFE_MIN, LIFE_MAX);
    const scale = rand(SCALE_MIN, SCALE_MAX);
    const offsetX = rand(-OFFSET_RADIUS, OFFSET_RADIUS);
    const offsetY = rand(-OFFSET_RADIUS, OFFSET_RADIUS);

    heart.style.setProperty('--dur', (dur / 1000) + 's');
    heart.style.setProperty('--scale', scale);

    heart.style.left = `calc(50% + ${offsetX}px)`;
    heart.style.top = `calc(50% + ${offsetY}px)`;

    container.appendChild(heart);
    setTimeout(() => heart.remove(), dur + 500);
  }

  setInterval(emitHeart, EMIT_EVERY_MS);
})();

