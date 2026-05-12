let display = document.getElementById("display");

function add(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}