const headers = document.querySelectorAll('#roller h1');

function checkVisibility() {
  headers.forEach(h1 => {
    const rect = h1.getBoundingClientRect();
    // Ajusta este valor para activar la animación antes o después
    if (rect.top < window.innerHeight * 1.5) {
      h1.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

const biography = document.getElementById('biography');

function checkBiography() {
  const rect = biography.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.9) {
    biography.classList.add('visible');
  }
}

window.addEventListener('scroll', checkBiography);
window.addEventListener('load', checkBiography);

const statsSection = document.getElementById('stats');

function checkStats() {
  const rect = statsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.85) {
    statsSection.classList.add('visible');
  }
}

window.addEventListener('scroll', checkStats);
window.addEventListener('load', checkStats);

const titlesSection = document.getElementById('titles');

function checkTitles() {
  const rect = titlesSection.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.85) {
    titlesSection.classList.add('visible');
  }
}

window.addEventListener('scroll', checkTitles);
window.addEventListener('load', checkTitles);
