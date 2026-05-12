const search = document.getElementById("search");
const output = document.getElementById("output");

let timer;

search.addEventListener("input", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    output.textContent = `Searching for: ${search.value}`;
  }, 500);
});