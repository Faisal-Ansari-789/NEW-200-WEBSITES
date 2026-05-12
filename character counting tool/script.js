document.getElementById("input").addEventListener("input", e => {
  document.getElementById("char").innerText = e.target.value.length;
});