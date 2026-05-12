const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let snake = [{x: 200, y: 200}];
let food = randomFood();
let dx = 20, dy = 0;

document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") dx=0, dy=-20;
  if (e.key === "ArrowDown") dx=0, dy=20;
  if (e.key === "ArrowLeft") dx=-20, dy=0;
  if (e.key === "ArrowRight") dx=20, dy=0;
});

function randomFood() {
  return {
    x: Math.floor(Math.random()*20)*20,
    y: Math.floor(Math.random()*20)*20
  };
}

function gameLoop() {
  ctx.clearRect(0,0,400,400);

  const head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = randomFood();
  } else {
    snake.pop();
  }

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 20, 20);

  ctx.fillStyle = "lime";
  snake.forEach(p => ctx.fillRect(p.x, p.y, 20, 20));
}

setInterval(gameLoop, 150);