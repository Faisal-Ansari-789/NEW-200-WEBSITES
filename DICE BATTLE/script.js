function roll() {
  const player = Math.floor(Math.random() * 6) + 1;
  const computer = Math.floor(Math.random() * 6) + 1;

  let result = `You: ${player} | Computer: ${computer} → `;

  if (player > computer) result += "You Win!";
  else if (player < computer) result += "Computer Wins!";
  else result += "Draw!";

  document.getElementById("result").textContent = result;
}