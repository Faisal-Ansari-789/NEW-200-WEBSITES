function choose(option) {
  const text = document.getElementById("text");
  if (option === 1) text.innerText = "MVP built. Market feedback begins.";
  if (option === 2) text.innerText = "Co-founder joined. Equity diluted.";
  if (option === 3) text.innerText = "Idea ignored. Nothing changes.";
}