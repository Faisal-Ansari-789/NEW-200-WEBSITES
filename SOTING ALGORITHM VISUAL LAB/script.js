const values = [40, 10, 60, 30, 20];
const container = document.getElementById("container");

values.forEach(v => {
  const bar = document.createElement("div");
  bar.className = "bar";
  bar.style.height = v * 4 + "px";
  container.appendChild(bar);
});

function sort() {
  const bars = document.querySelectorAll(".bar");
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length - i - 1; j++) {
      if (values[j] > values[j + 1]) {
        [values[j], values[j + 1]] = [values[j + 1], values[j]];
        bars[j].style.height = values[j] * 4 + "px";
        bars[j + 1].style.height = values[j + 1] * 4 + "px";
      }
    }
  }
}