let num;

function start() {
  num = Math.floor(Math.random() * 900 + 100);
  document.getElementById("number").innerText = num;
  document.getElementById("input").value = "";
  document.getElementById("input").disabled = true;

  setTimeout(() => {
    document.getElementById("number").innerText = "";
    document.getElementById("input").disabled = false;
  }, 2000);
}

document.getElementById("input").addEventListener("input", e => {
  document.getElementById("result").innerText =
    e.target.value == num ? "Correct!" : "";
});