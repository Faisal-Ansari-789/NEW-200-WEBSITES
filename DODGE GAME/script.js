const c = document.getElementById("game");
const ctx = c.getContext("2d");

let playerX=180;
let obsY=0;

document.addEventListener("keydown", e=>{
  if(e.key==="ArrowLeft") playerX-=20;
  if(e.key==="ArrowRight") playerX+=20;
});

function loop(){
  ctx.clearRect(0,0,400,300);

  ctx.fillStyle="lime";
  ctx.fillRect(playerX,260,40,20);

  ctx.fillStyle="red";
  ctx.fillRect(200,obsY,40,20);

  obsY+=5;
  if(obsY>300) obsY=0;
}

setInterval(loop,30);