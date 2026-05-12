let score = 0;
const holes = document.querySelectorAll(".hole");

setInterval(() => {
  holes.forEach(h => h.classList.remove("mole"));
  const randomHole = holes[Math.floor(Math.random() * holes.length)];
  randomHole.classList.add("mole");
}, 800);

function hit(hole) {
  if (hole.classList.contains("mole")) {
    score++;
    document.getElementById("score").textContent = score;
    hole.classList.remove("mole");
  }
}