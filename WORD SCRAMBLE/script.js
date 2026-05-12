const word = "javascript";
const scrambled = word.split("").sort(() => 0.5 - Math.random()).join("");
document.getElementById("scramble").innerText = scrambled;

function check() {
  document.getElementById("result").innerText =
    document.getElementById("input").value === word ? "Correct!" : "Wrong";
}