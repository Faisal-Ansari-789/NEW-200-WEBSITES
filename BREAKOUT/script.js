const c = document.getElementById("game");
const ctx = c.getContext("2d");

let x=200, y=150, dx=2, dy=2;
let paddleX=150;

document.addEventListener("mousemove", e=>{
  paddleX = e.clientX - 50;
});

function draw(){
  ctx.clearRect(0,0,400,300);

  ctx.fillStyle="white";
  ctx.fillRect(paddleX,280,100,10);

  ctx.beginPath();
  ctx.arc(x,y,8,0,Math.PI*2);
  ctx.fill();

  x+=dx; y+=dy;
  if(x<0||x>400) dx*=-1;
  if(y<0) dy*=-1;
  if(y>270 && x>paddleX && x<paddleX+100) dy*=-1;
}

setInterval(draw,16);