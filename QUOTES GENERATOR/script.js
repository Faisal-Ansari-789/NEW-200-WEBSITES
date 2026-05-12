const quotes = [
  "Discipline beats motivation.",
  "Code daily, win slowly.",
  "Consistency compounds.",
  "Small progress is progress."
];

const quoteEl = document.getElementById("quote");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[r];
});

btn.click();