function changeColor() {
  let color = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.background = color;
  document.getElementById("code").innerText = color;
}