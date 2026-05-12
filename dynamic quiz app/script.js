const quiz = [
  { q: "2 + 2?", a: ["3","4","5"], c: 1 },
  { q: "JS runs in?", a: ["Browser","HTML"], c: 0 }
];

let i = 0, score = 0;

function load() {
  q.innerText = quiz[i].q;
  options.innerHTML = "";
  quiz[i].a.forEach((o, idx) => {
    const btn = document.createElement("button");
    btn.innerText = o;
    btn.onclick = () => { if (idx === quiz[i].c) score++; };
    options.appendChild(btn);
  });
}

function next() {
  i++;
  if (i < quiz.length) load();
  else alert("Score: " + score);
}

load();