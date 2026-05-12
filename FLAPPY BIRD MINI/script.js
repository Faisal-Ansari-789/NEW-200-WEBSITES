const c = document.getElementById("game");
const ctx = c.getContext("2d");

let birdY = 150;
let gravity = 2;
let lift = -25;

document.addEventListener("keydown", () => birdY += lift);

function loop() {
  ctx.clearRect(0,0,400,300);
  birdY += gravity;

  ctx.fillStyle = "yellow";
  ctx.fillRect(50, birdY, 20, 20);

  if (birdY > 280) birdY = 280;
}

setInterval(loop, 30);