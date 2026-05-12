let startTime;
const box = document.getElementById("box");
const status = document.getElementById("status");

setTimeout(() => {
  box.style.display = "block";
  box.style.background = "green";
  startTime = Date.now();
}, Math.random() * 3000 + 2000);

box.onclick = () => {
  const reaction = Date.now() - startTime;
  status.innerText = `Reaction Time: ${reaction} ms`;
  box.style.display = "none";
};