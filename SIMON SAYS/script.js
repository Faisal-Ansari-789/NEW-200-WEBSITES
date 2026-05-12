const colors = ["red","green","blue","yellow"];
let sequence = [];
let userIndex = 0;

function nextRound() {
  sequence.push(colors[Math.floor(Math.random()*4)]);
  userIndex = 0;
  document.getElementById("status").textContent = "Sequence: " + sequence.join(", ");
}

function press(color) {
  if (color === sequence[userIndex]) {
    userIndex++;
    if (userIndex === sequence.length) nextRound();
  } else {
    alert("Wrong! Game Over");
    sequence = [];
  }
}

nextRound();