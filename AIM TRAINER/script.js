let score = 0;
const target = document.getElementById("target");

function move() {
  target.style.top = Math.random()*300 + "px";
  target.style.left = Math.random()*300 + "px";
}
move();
setInterval(move, 1000);

function hit() {
  score++;
  document.getElementById("score").textContent = score;
  move();
}