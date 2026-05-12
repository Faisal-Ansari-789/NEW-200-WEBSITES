const modal = document.getElementById("modal");

document.getElementById("openBtn").onclick = () => {
  modal.style.display = "block";
};

document.getElementById("closeBtn").onclick = () => {
  modal.style.display = "none";
};