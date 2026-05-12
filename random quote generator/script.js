const quotes = [
  "Stay hungry, stay foolish.",
  "Code. Learn. Repeat.",
  "Consistency beats talent.",
  "Dream big. Start small.",
    "Simplicity is the ultimate sophistication.",
    "rome wasn't built in a day.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there."
];

function newQuote() {
  let q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = q;
}