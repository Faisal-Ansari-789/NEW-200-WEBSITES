const text = document.getElementById("text");
const undoBtn = document.getElementById("undo");
const redoBtn = document.getElementById("redo");

let undoStack = [];
let redoStack = [];

text.addEventListener("input", () => {
  undoStack.push(text.value);
  redoStack = [];
});

undoBtn.addEventListener("click", () => {
  if (undoStack.length > 1) {
    redoStack.push(undoStack.pop());
    text.value = undoStack[undoStack.length - 1];
  }
});

redoBtn.addEventListener("click", () => {
  if (redoStack.length) {
    const val = redoStack.pop();
    undoStack.push(val);
    text.value = val;
  }
});