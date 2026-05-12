document.getElementById("text").addEventListener("input", () => {
  let text = document.getElementById("text").value.trim();
  let words = text === "" ? 0 : text.split(/\s+/).length;
  document.getElementById("count").innerText = words;
});