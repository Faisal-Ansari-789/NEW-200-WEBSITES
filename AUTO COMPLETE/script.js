const data = ["Apple","Apricot","Banana","Blueberry","Mango","Orange"];
const search = document.getElementById("search");
const results = document.getElementById("results");

search.addEventListener("input", () => {
  const q = search.value.toLowerCase();
  results.innerHTML = "";

  if(!q) return;

  data.filter(item => item.toLowerCase().startsWith(q))
      .forEach(match => {
        const li = document.createElement("li");
        li.textContent = match;
        results.appendChild(li);
      });
});