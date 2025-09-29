const navbar = document.querySelector('.rolka');

// ustaw stały kolor i cień (opcjonalnie)
navbar.style.background = 'rgba(255, 111, 163, 1)';
navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';

// hamburger menu
const przycisk = document.querySelector('.rolka-przycisk');
const menu = document.querySelector('.rolka-menu');

przycisk.addEventListener('click', () => {
  przycisk.classList.toggle('aktywny');
  menu.classList.toggle('aktywny');
});
// scroll to top button
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


scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const lightbox = document.getElementById('lightbox-overlay');
const lightboxImg = lightbox.querySelector('img');
const images = document.querySelectorAll('.love-image img, .love-image1 img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src; // wstawiamy to samo zdjęcie
    lightbox.style.display = 'flex'; // pokazujemy overlay
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none'; // kliknięcie poza zdjęciem zamyka
});
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.hero-left, .hero-right, .love-box, .love-box1, .love-image, .love-image1');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // animacja tylko raz
      }
    });
  }, { threshold: 0.1 }); // element pojawia się, gdy 10% jest w widoku

  elements.forEach(el => observer.observe(el));
});