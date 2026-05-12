const c = document.getElementById("c");
const f = document.getElementById("f");

c.addEventListener("input", () => {
  f.value = ((c.value * 9) / 5 + 32).toFixed(2);
});

f.addEventListener("input", () => {
  c.value = (((f.value - 32) * 5) / 9).toFixed(2);
});