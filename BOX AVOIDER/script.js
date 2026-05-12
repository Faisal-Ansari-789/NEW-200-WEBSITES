let enemy = document.getElementById("enemy");
let topPos = 0;

setInterval(() => {
  topPos += 5;
  enemy.style.top = topPos + "px";
  if (topPos > window.innerHeight) topPos = 0;
}, 50);

document.addEventListener("mousemove", e => {
  document.getElementById("player").style.left = e.clientX + "px";
});