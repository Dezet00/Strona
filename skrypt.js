
  const navbar = document.querySelector('.rolka');
  const maxScroll = window.innerHeight * 0.6; // przewinięcie, przy którym navbar będzie w pełni widoczny

  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let opacity = Math.min(scrollY / maxScroll, 1); // 0 → 1

    navbar.style.background = `rgba(255, 111, 163, ${opacity})`; // płynna zmiana przezroczystości

    // Płynny cień
    if (opacity > 0) {
      navbar.style.boxShadow = `0 4px 15px rgba(0,0,0,${0.15 * opacity})`;
    } else {
      navbar.style.boxShadow = 'none';
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


const sections = document.querySelectorAll(
  '.intro-section, .image-text-container, .gallery, .center-section, .section-container-full, .image-gallery-section, .end-text-outer'
);

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.classList.add('fade-in-section');
  observer.observe(section);
});







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