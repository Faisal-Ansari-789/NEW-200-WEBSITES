function generate() {
  let c1 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let c2 = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.background = `linear-gradient(120deg, ${c1}, ${c2})`;
}