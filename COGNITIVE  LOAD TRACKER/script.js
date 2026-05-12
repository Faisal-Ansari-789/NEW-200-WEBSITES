const words = ["focus", "memory", "attention", "decision", "control"];
let current = 0;
let startTime = Date.now();
let errors = 0;

const wordEl = document.getElementById("word");
const input = document.getElementById("input");

input.addEventListener("input", () => {
  if (!input.value) return;

  if (input.value === words[current]) {
    const time = Date.now() - startTime;
    document.getElementById("speed").innerText = time;

    current = (current + 1) % words.length;
    wordEl.innerText = words[current];
    input.value = "";
    startTime = Date.now();

    updateLoad(time);
  } else if (!words[current].startsWith(input.value)) {
    errors++;
    document.getElementById("errors").innerText = errors;
  }
});

function updateLoad(time) {
  let load = "Low";
  if (time > 2000 || errors > 3) load = "High";
  else if (time > 1200 || errors > 1) load = "Medium";

  document.getElementById("load").innerText = load;
}