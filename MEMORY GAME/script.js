const symbols = ["🍎","🍌","🍎","🍌","🍇","🍇","🍒","🍒"];
symbols.sort(() => 0.5 - Math.random());

const grid = document.getElementById("grid");
let first = null;
let lock = false;
let matched = 0;

symbols.forEach(sym => {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.symbol = sym;
  card.textContent = "";
  card.onclick = () => flip(card);
  grid.appendChild(card);
});

function flip(card) {
  if (lock || card.textContent) return;

  card.textContent = card.dataset.symbol;

  if (!first) {
    first = card;
  } else {
    lock = true;
    if (first.dataset.symbol === card.dataset.symbol) {
      matched += 2;
      first = null;
      lock = false;
      if (matched === symbols.length)
        document.getElementById("status").textContent = "You Won!";
    } else {
      setTimeout(() => {
        first.textContent = "";
        card.textContent = "";
        first = null;
        lock = false;
      }, 700);
    }
  }
}