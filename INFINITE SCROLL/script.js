const list = document.getElementById("list");
let count = 1;

function loadItems(){
  for(let i=0;i<5;i++){
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = `Item ${count++}`;
    list.appendChild(div);
  }
}

window.addEventListener("scroll", () => {
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 10){
    loadItems();
  }
});

loadItems();