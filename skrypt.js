const navbar = document.querySelector('.rolka');
const triggerScroll = window.innerHeight * 0.6; // punkt, po którym kolor nagle się pojawia

window.addEventListener('scroll', () => {
  if (window.scrollY > triggerScroll) {
    navbar.classList.add('active'); // nagłe pojawienie się, ale z lekką animacją
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


  const btn = document.querySelector('.btn');

  function createHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.textContent = '♥';

    const btnRect = btn.getBoundingClientRect();
    heart.style.left = (btnRect.left + btnRect.width / 2) + 'px';
    heart.style.top = (btnRect.top - 10 + window.scrollY) + 'px';

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }


  setInterval(() => {
    if (Math.random() > 0.5) {
      createHeart();
    }
  }, 3000);




const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.pointerEvents = "auto";
  } else {
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.pointerEvents = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll('.slideshow-container').forEach(container => {
  const slides = container.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide); // pokaż pierwszy slajd
  setInterval(nextSlide, 7000);
});



(() => {
  const track = document.querySelector('.galery-track');
  const fill = document.querySelector('.scrollbar-fill');
  if (!track || !fill) return;

  const container = track.closest('.galery-container') || track.parentElement;

  let isDown = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;

  // === MYSZ ===
  track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.clientX;
    track.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    prevTranslate = currentTranslate;
    track.style.cursor = 'grab';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const walk = e.clientX - startX;
    moveTrack(walk);
    e.preventDefault();
  });

  // === DOTYK ===
  track.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (!isDown) return;
    isDown = false;
    prevTranslate = currentTranslate;
  });

  track.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const walk = e.touches[0].clientX - startX;
    moveTrack(walk);
  }, { passive: false });

  // === RUCH GALERII ===
  function moveTrack(walk) {
    currentTranslate = prevTranslate + walk;

    const trackWidth = track.scrollWidth;
    const containerWidth = container.offsetWidth;
    const maxTranslate = 0;
    const minTranslate = Math.min(containerWidth - trackWidth, 0);

    if (currentTranslate > maxTranslate) currentTranslate = maxTranslate;
    if (currentTranslate < minTranslate) currentTranslate = minTranslate;

    track.style.transform = `translateX(${currentTranslate}px)`;
    updateScrollbar();
  }

  // === AKTUALIZACJA PASKA POSTĘPU ===
  function updateScrollbar() {
    const trackWidth = track.scrollWidth;
    const containerWidth = container.offsetWidth;
    const maxScroll = trackWidth - containerWidth;

    // Oblicz procent przewinięcia
    const scrollPercent = Math.min(Math.max(-currentTranslate / maxScroll, 0), 1);

    fill.style.width = `${scrollPercent * 100}%`;
  }

  // Inicjalizacja na starcie
  updateScrollbar();
})();
