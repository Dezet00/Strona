
(() => {
  // navbar scroll
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
})();


const questions = [
  { q: "Jaki jest mój lubiony Kolor to?", a: "niebieski" },
  { q: "Ile mam obecnie Wzrostu?", a: "184" },
  { q: "Jaki mam znak Zodiaku?", a: "koziorozec" },
  { q: "jak sie nazywa ten cudowny park - który odwiedziliśmy jako pierwszy", a: ["roz", "parkroz"] },
  { q: "Jakie jest moje DRUGIE ulubione Słodkie okreslenie Ciebie?", a: ["kotek", "kotku"] },
  { q: "jak nazywa sie gra w ktora gralismy u mnie?", a: "eldenring" },
  { q: "W której porze dnia do Ciebie napisałem na IG?", a: ["wieczor", "wieczorem"] },
  { q: "Jakie zwierzątko miałem za młodu?", a: ["krolik", "krolika"] },
  { q: "Jaki ja mam kolor oczu?", a: "brazowy" },
  { q: "Jaka jest moja twoja ulubiona część Ciala?", a: "oczy" },
  { q: "Jakie jest moje ULUBIONE i najczestrze określenie na Ciebie?", a: ["misiek", "misiu"] },
  { q: "Jaki mityczny kalendarz uznalismy za prawdziwy?", a: "chinski" },
  { q: "Moja ulubiona gra na steamie to?", a: ["darksouls", "darksoulsy"] },
  { q: "na co ja mam uczuelenie?", a: ["pomarancza", "pomarancze"] },
  { q: "Jakie zwierze chcialem miec zawsze w domu?", a: ["kapibare", "kapibara"] },
  { q: "Jakie mam obecnie zwierze w domu", a: ["kot", "kota"] },
  { q: "Co przynioslem twojemu tacie na moim wyjezdzie?", a: ["czekolade", "czekolada"] },
  { q: "kto zrobil tobie jako pierwszy zdjecie jak spałaś?", a: "blanka" },
  { q: "kto jako pierwszy dowiedzial sie o prezencie dla ciebie", a: ["mama", "blanka"] },
  { q: "Za Którym razem zdałem swoje prawo jazdy?", a: "2" },
  { q: "Najczęściej grana przez nas gra to?", a: ["duchy", "phasmophobia"] },
  { q: "Gdzie na pierwszym wyjezdzie mialem tak długą przesiadke?", a: "warszawa" },
  { q: "Jak nazywa sie pierwszy Miś którego dostałas ode mnie?", a: "orzeszek" },
  { q: "Ile mam istotnego kuzynostwa ?", a: ["dwa", "2"] },
  { q: "Jak nazywała się firma której byłem współzałożycielem?", a: "ineris" },
  { q: "Kto oprowadzał mnie po Sali sołeckiej na pierwszym wyjzedzie?", a: "blanka" },
  { q: "Jaka jest moja druga gra na której mam najwiecej godzin na steamie?", a: ["mama", "blanka"] },
  { q: "Kto miał duży wpływ na rozwój naszego związku? ", a: ["maja", "majka"] },
  { q: "kto z nas zawsze ma racje?", a: ["nikola", "ja"] },
  { q: "ktorego dnia mam urodziny?", a: "4" }
];


let score = 0;
let used = [];

const qEl = document.getElementById("question");
const aEl = document.getElementById("answer");
const btn = document.getElementById("checkBtn");
const sEl = document.getElementById("score");

let currentQ;

function randomQuestion() {
  if (used.length === questions.length) used = [];
  let q;
  do {
    q = Math.floor(Math.random() * questions.length);
  } while (used.includes(q));
  used.push(q);
  currentQ = questions[q];
  qEl.textContent = currentQ.q;
  aEl.value = "";
  aEl.focus();
}
const customWinText = "(...)orzeszek552"; // tutaj możesz wpisać swój tekst

function checkAnswer() {
  const ans = aEl.value.trim().toLowerCase();
  let correct = false;

  if (Array.isArray(currentQ.a)) {
    correct = currentQ.a.map(a => a.toLowerCase()).includes(ans);
  } else {
    correct = currentQ.a.toLowerCase() === ans;
  }

  if (correct) {
    score++;
    sEl.textContent = `Wynik: ${score}`;
    createEffect('star');
    if (score >= 15) {
    qEl.innerHTML = `<div class="win">🎉 WYGRAŁEŚ! 🎉<br><small>${customWinText}</small></div>`;
    btn.style.display = "none";
    aEl.style.display = "none";
    createWinEffect();
    } else {
      randomQuestion();
    }
  } else {
    score = 0;
    sEl.textContent = `Źle! Wynik zresetowany.`;
    createEffect('x');
    setTimeout(() => {
      sEl.textContent = `Wynik: 0`;
      randomQuestion();
    }, 1500);
  }
}

btn.addEventListener("click", checkAnswer);
aEl.addEventListener("keydown", e => {
  if (e.key === "Enter") checkAnswer();
});

randomQuestion();

(() => {
  const infoBox = document.getElementById('infoBox');

  // pokazujemy box po 1 sekundzie
  setTimeout(() => {
    infoBox.classList.add('show');

    const hideInfo = () => {
      infoBox.style.transition = 'none';
      infoBox.classList.remove('show');
      infoBox.classList.add('hidden');
      document.removeEventListener('click', hideInfo);
      document.removeEventListener('focusin', hideInfo);
    };

    // kliknięcie w dowolne miejsce ukrywa box
    document.addEventListener('click', hideInfo, { once: true });

    // jeśli użytkownik kliknie w input (czyli otworzy klawiaturę)
    document.addEventListener('focusin', hideInfo, { once: true });

  }, 1000);
})();


// --- EFEKTY WIZUALNE ---
const quizBox = document.querySelector('.quiz-box');

// Tworzy efekt wyskakujących symboli
function createEffect(type) {
  const container = document.createElement('div');
  container.classList.add('effect-container');
document.querySelector('.quiz-effects').appendChild(container);

  // ile symboli ma wyskoczyć
  const count = 8;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('span');
    particle.classList.add('particle');
    particle.textContent = type === 'star' ? '✨' : '❌';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    particle.style.color = type === 'star' ? '#ff99ff' : '#ff4444';
    particle.style.animationDelay = (Math.random() * 0.2) + 's';
    particle.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(particle);
  }

  // usunięcie po animacji
  setTimeout(() => container.remove(), 1500);
}


function createWinEffect() {
  const container = document.createElement('div');
  container.classList.add('win-stars-container');
  quizBox.appendChild(container);

  const count = 10; // ilość gwiazdek w tle

  for (let i = 0; i < count; i++) {
    const star = document.createElement('span');
    star.classList.add('win-star');
    star.textContent = '✨';
    star.style.left = Math.random() * 100 + '%';
    star.style.color = '#ffb3ff';
    star.style.animationDelay = (Math.random() * 4) + 's';
    star.style.fontSize = 18 + Math.random() * 10 + 'px';
    container.appendChild(star);
  }

  // nie usuwamy — efekt ma trwać podczas wygranej
}