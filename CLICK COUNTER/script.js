const btn = document.getElementById("btn");
const log = document.getElementById("log");
let clicks = 0;

btn.addEventListener("click", () => {
  clicks++;
  log.textContent = `Clicks: ${clicks}`;
});