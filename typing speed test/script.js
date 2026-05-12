const input = document.getElementById("input");
const text = document.getElementById("text");
const stats = document.getElementById("stats");

let startTime = null;

input.addEventListener("input", () => {
  if (!startTime) startTime = new Date();

  if (input.value === text.innerText) {
    const timeTaken = (new Date() - startTime) / 1000;
    const words = text.innerText.split(" ").length;
    const wpm = Math.round((words / timeTaken) * 60);

    stats.innerText = `WPM: ${wpm}`;
  }
});