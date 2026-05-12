let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "Draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win!";
    playerScore++;
  } else {
    result = "Computer Wins!";
    computerScore++;
  }

  document.getElementById("result").textContent =
    `You: ${playerChoice} | Computer: ${computerChoice} → ${result}`;

  document.getElementById("score").textContent =
    `Score → You: ${playerScore} | Computer: ${computerScore}`;
}