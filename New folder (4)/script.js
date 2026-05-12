const search = document.getElementById("search");
const items = document.querySelectorAll("#list li");

search.addEventListener("input", () => {
  const q = search.value.toLowerCase();
  items.forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(q) ? "" : "none";
  });
});