let score = 0;
let a,b;

function newQ(){
  a=Math.floor(Math.random()*10);
  b=Math.floor(Math.random()*10);
  document.getElementById("question").textContent = `${a} + ${b}`;
}
newQ();

function check(){
  if(Number(ans.value) === a+b) score++;
  document.getElementById("score").textContent = "Score: "+score;
  ans.value="";
  newQ();
}