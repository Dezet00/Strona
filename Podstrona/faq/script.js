// 🎨 Stały kolor nawigacji (bez przezroczystości i bez efektu scrolla)
const navbar = document.querySelector('.rolka');
navbar.style.background = 'rgb(255, 111, 163)'; // pełny kolor
navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';

// 🍔 hamburger menu
const przycisk = document.querySelector('.rolka-przycisk');
const menu = document.querySelector('.rolka-menu');

przycisk.addEventListener('click', () => {
  przycisk.classList.toggle('aktywny');
  menu.classList.toggle('aktywny');
});