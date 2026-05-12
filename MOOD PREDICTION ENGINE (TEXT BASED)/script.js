function analyze() {
  const text = document.getElementById("input").value.toLowerCase();
  let score = 0;

  if (text.includes("happy")) score++;
  if (text.includes("sad")) score--;
  if (text.includes("excited")) score++;
  if (text.includes("angry")) score--;

  const result = document.getElementById("result");
  result.innerText =
    score > 0 ? "Positive Mood 🙂" :
    score < 0 ? "Negative Mood 😞" :
    "Neutral Mood 😐";
}