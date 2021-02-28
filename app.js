
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
}

// Drum Kit

function removeTransition(e) {
  if (e.propertyName !== 'color') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  console.log(e)
  let keyCode;
  if (e.type === 'click') {
    keyCode = Number(e.target.dataset.key);
  } else {
    keyCode = e.keyCode;
  }

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('click', playSound));

// Initial run for theme
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
})();
