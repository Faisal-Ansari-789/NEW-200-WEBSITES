let lastAction = Date.now();
let driftTimer;

function register() {
  lastAction = Date.now();
  setFocused();
}

function setFocused() {
  const ind = document.getElementById("indicator");
  ind.innerText = "Focused";
  ind.style.background = "#16a34a";
}

function setDrift() {
  const ind = document.getElementById("indicator");
  ind.innerText = "Attention Drifting";
  ind.style.background = "#dc2626";
}

driftTimer = setInterval(() => {
  if (Date.now() - lastAction > 5000) {
    setDrift();
  }
}, 1000);