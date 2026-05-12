let score = 0;
let active = true;

setTimeout(() => active = false, 5000);

function clickBtn() {
  if (!active) return;
  score++;
  document.getElementById("score").innerText = score;
}