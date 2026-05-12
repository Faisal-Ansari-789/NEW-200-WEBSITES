const body = document.getElementById("body");
const sort = document.getElementById("sort");

let data = [45, 12, 88, 34, 67];
let asc = true;

function render(){
  body.innerHTML = "";
  data.forEach(v => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${v}</td>`;
    body.appendChild(tr);
  });
}

sort.addEventListener("click", () => {
  data.sort((a,b) => asc ? a-b : b-a);
  asc = !asc;
  render();
});

render();