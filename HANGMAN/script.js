const words = ["javascript", "developer", "frontend"];
let selected = words[Math.floor(Math.random()*words.length)];
let display = Array(selected.length).fill("_");
let attempts = 6;

document.getElementById("word").textContent = display.join(" ");

function guess() {
  const letter = document.getElementById("letter").value;
  let found = false;

  for (let i=0;i<selected.length;i++) {
    if (selected[i] === letter) {
      display[i] = letter;
      found = true;
    }
  }

  if (!found) attempts--;

  document.getElementById("word").textContent = display.join(" ");
  document.getElementById("status").textContent = "Attempts left: " + attempts;

  if (!display.includes("_")) alert("You Win!");
  if (attempts === 0) alert("Game Over!");
}