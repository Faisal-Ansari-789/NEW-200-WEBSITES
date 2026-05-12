let start;

const input = document.getElementById("answer");
const output = document.getElementById("output");

input.onfocus = () => {
  start = Date.now();
};

input.onblur = () => {
  const time = Date.now() - start;
  output.innerText =
    time > 3000 ? "High Hesitation Detected 🤔" : "Confident Response 😎";
};