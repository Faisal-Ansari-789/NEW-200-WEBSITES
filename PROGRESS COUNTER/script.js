const bar = document.getElementById("bar");
const add = document.getElementById("add");
let progress = 0;

add.addEventListener("click", () => {
  if(progress < 100){
    progress += 20;
    bar.style.width = progress + "%";
  }
});