const quiz = [
  { q: "Capital of India?", a: ["Mumbai","Delhi","Pune"], c: 1 },
  { q: "2 + 2?", a: ["3","4","5"], c: 1 }
];

let index = 0;
let score = 0;

function load() {
  document.getElementById("question").textContent = quiz[index].q;
  document.querySelectorAll("button").forEach((b,i)=>{
    b.textContent = quiz[index].a[i];
  });
}

function answer(choice) {
  if (choice === quiz[index].c) score++;
  index++;
  if (index < quiz.length) load();
  else document.getElementById("score").textContent = "Score: " + score;
}

load();