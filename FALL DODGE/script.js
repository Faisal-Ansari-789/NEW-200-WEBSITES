const player = document.getElementById("player");
const block = document.getElementById("block");
let topPos = 0;

document.addEventListener("mousemove", e => {
  player.style.left = e.clientX + "px";
});

setInterval(() => {
  topPos += 8;
  block.style.top = topPos + "px";
  if (topPos > window.innerHeight) {
    topPos = 0;
    block.style.left = Math.random() * 90 + "vw";
  }
}, 40);