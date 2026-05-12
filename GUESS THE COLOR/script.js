const colors = ["red","blue","green"];
let chosen = colors[Math.floor(Math.random()*3)];
document.getElementById("box").style.background = chosen;

function guess(color){
  if(color === chosen) alert("Correct!");
  else alert("Wrong!");
}