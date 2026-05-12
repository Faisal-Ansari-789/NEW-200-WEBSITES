let currentPlayer = "X";
let gameActive = true;

function makeMove(cell) {
  if (cell.textContent || !gameActive) return;

  cell.textContent = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  const cells = document.querySelectorAll(".cell");
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  winPatterns.forEach(p => {
    if (
      cells[p[0]].textContent &&
      cells[p[0]].textContent === cells[p[1]].textContent &&
      cells[p[1]].textContent === cells[p[2]].textContent
    ) {
      document.getElementById("status").textContent =
        cells[p[0]].textContent + " Wins!";
      gameActive = false;
    }
  });
}

function resetGame() {
  document.querySelectorAll(".cell").forEach(c => c.textContent = "");
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("status").textContent = "";
}