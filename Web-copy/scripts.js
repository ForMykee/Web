const DarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

function toggleDM() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

window.onload = function() {
  if (DarkMode) {
    toggleDM();
  }
}