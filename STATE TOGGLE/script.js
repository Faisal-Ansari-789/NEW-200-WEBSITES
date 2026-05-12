const toggle = document.getElementById("toggle");
const stateText = document.getElementById("state");

let state = { on:false };

function render(){
  stateText.textContent = state.on ? "ON" : "OFF";
  document.body.style.background = state.on ? "#15803d" : "#0f172a";
}

toggle.addEventListener("click", () => {
  state.on = !state.on;
  render();
});

render();