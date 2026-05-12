let score = 0;
const target = document.getElementById("target");

function move() {
  target.style.left = Math.random() * 90 + "vw";
  target.style.top = Math.random() * 90 + "vh";
}

target.onclick = () => {
  score++;
  document.getElementById("score").innerText = score;
  move();
};

move();