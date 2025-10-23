const navbar = document.querySelector('.rolka');
const triggerScroll = window.innerHeight * 0.3; 

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


  document.getElementById("btn-historia").addEventListener("click", function() {
    document.getElementById("historia").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("btn-zwrot").addEventListener("click", function() {
    document.getElementById("zwrot").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("btn-przyszlosc").addEventListener("click", function() {
    document.getElementById("przyszlosc").scrollIntoView({ behavior: "smooth" });
  });

