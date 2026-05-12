let start;

setTimeout(() => {
  document.getElementById("box").style.background = "green";
  start = new Date();
}, Math.random() * 3000 + 2000);

function boxClicked() {
  if (!start) return;

  const end = new Date();
  const reaction = end - start;
  document.getElementById("time").textContent =
    "Reaction Time: " + reaction + " ms";
}