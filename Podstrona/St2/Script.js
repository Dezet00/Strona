// navbar scroll effect

const navbar = document.querySelector('.rolka');
const maxScroll = window.innerHeight * 0.6;

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  let opacity = Math.min(scrollY / maxScroll, 1);

  navbar.style.background = `rgba(255, 111, 163, ${opacity})`;

  if (opacity > 0) {
    navbar.style.boxShadow = `0 4px 15px rgba(0,0,0,${0.15 * opacity})`;
  } else {
    navbar.style.boxShadow = 'none';
  }
});

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
