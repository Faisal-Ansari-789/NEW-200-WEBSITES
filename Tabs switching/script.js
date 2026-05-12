function openTab(tab) {
  let contents = document.querySelectorAll(".content");
  contents.forEach(c => c.style.display = "none");

  document.getElementById(tab).style.display = "block";
}