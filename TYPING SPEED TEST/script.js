const text = document.getElementById("text").textContent;
let startTime = null;

function checkTyping() {
  if (!startTime) startTime = new Date();

  const input = document.getElementById("input").value;

  if (input === text) {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    const speed = Math.round((text.split(" ").length / timeTaken) * 60);
    document.getElementById("result").textContent =
      "Speed: " + speed + " WPM";
  }
}