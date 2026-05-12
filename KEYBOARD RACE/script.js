let pos = 0;
document.addEventListener("keydown", e => {
  if (e.code === "Space") {
    pos += 10;
    document.getElementById("car").style.left = pos + "px";
    if (pos > 700) alert("You Win!");
  }
});