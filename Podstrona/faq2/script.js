function checkPassword() {
  const input = document.getElementById("password");
  const password = input.value;

  // ✅ Poprawne hasło
  if (password === "07orzeszek552") {
    input.style.borderBottom = "2px solid #00cc66";
    input.style.color = "#00cc66";

    // Mały efekt przed przekierowaniem
    setTimeout(() => {
      window.location.href = "../gift/gift.html";
    }, 700);
  } 
  // ❌ Błędne hasło
  else {
    input.classList.add("error");
    input.style.borderBottom = "2px solid red";
    input.style.color = "red";

    // Po 1 sekundzie resetuje styl i czyści pole
    setTimeout(() => {
      input.classList.remove("error");
      input.style.borderBottom = "2px solid #8b8b8b";
      input.style.color = "#f5f5f5";
      input.value = "";
    }, 1000);
  }
}

// 🎯 Obsługa ENTERA (klawiatura + telefon)
document.getElementById("password").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkPassword();
  }
});

// 💡 PODPOWIEDŹ — tylko raz, losowa, w okienku alert
const hints = [
  "💬 Podpowiedź: Czasem niektóre aktywności na stronie - zbliżą Cie do odpowiedzi",
  "❤️ Wskazówka: Czasem wspolni znajomi wiedzą wiecej ",
  "💕 Może czytaj miedzy wierszami?"
];

const hintBtn = document.querySelector(".hint");
let hintUsed = false;

hintBtn.addEventListener("click", () => {
  if (hintUsed) return; // można kliknąć tylko raz
  hintUsed = true;

  const randomHint = hints[Math.floor(Math.random() * hints.length)];
  alert(randomHint); // 👈 wyskakuje okienko z podpowiedzią

  // dezaktywacja przycisku
  hintBtn.style.opacity = "0.5";
  hintBtn.style.pointerEvents = "none";
});

// 🎨 Efekt przezroczystości nawigacji
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

// 🍔 hamburger menu
const przycisk = document.querySelector('.rolka-przycisk');
const menu = document.querySelector('.rolka-menu');

przycisk.addEventListener('click', () => {
  przycisk.classList.toggle('aktywny');
  menu.classList.toggle('aktywny');
});
