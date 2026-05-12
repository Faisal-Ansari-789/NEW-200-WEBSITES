const c = document.getElementById("game");
const ctx = c.getContext("2d");

let ballX=200, ballY=150, dx=2, dy=2;

function draw() {
  ctx.clearRect(0,0,400,300);
  ctx.fillStyle="white";
  ctx.beginPath();
  ctx.arc(ballX, ballY, 8, 0, Math.PI*2);
  ctx.fill();

  ballX+=dx;
  ballY+=dy;

  if(ballX<0||ballX>400) dx*=-1;
  if(ballY<0||ballY>300) dy*=-1;
}

setInterval(draw, 16);