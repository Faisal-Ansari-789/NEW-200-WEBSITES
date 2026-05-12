let points = 0;
const ball = document.getElementById("ball");

setInterval(() => {
  ball.style.left = Math.random() * 90 + "vw";
  ball.style.top = Math.random() * 90 + "vh";
}, 800);

function score() {
  points++;
  document.getElementById("points").innerText = points;
}