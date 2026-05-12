const pwd = document.getElementById("pwd");
const meter = document.getElementById("meter");
const label = document.getElementById("label");

pwd.addEventListener("input", () => {
  let score = 0;
  const v = pwd.value;
  if (v.length >= 6) score++;
  if (/[A-Z]/.test(v)) score++;
  if (/[0-9]/.test(v)) score++;
  if (/[^A-Za-z0-9]/.test(v)) score++;

  meter.style.width = `${score * 25}%`;
  meter.style.background = ["red","orange","yellow","green"][score-1] || "#334155";
  label.textContent = ["Weak","Fair","Good","Strong"][score-1] || "";
});