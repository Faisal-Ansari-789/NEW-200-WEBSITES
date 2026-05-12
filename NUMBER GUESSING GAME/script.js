let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  attempts++;

  if (guess === randomNumber) {
    document.getElementById("message").textContent = "Correct! 🎉";
  } else if (guess > randomNumber) {
    document.getElementById("message").textContent = "Too High!";
  } else {
    document.getElementById("message").textContent = "Too Low!";
  }

  document.getElementById("attempts").textContent =
    "Attempts: " + attempts;
}