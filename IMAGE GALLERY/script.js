const images = document.querySelectorAll(".grid img");
const modal = document.getElementById("modal");
const full = document.getElementById("full");

images.forEach(img => {
  img.addEventListener("click", () => {
    full.src = img.src;
    modal.classList.remove("hidden");
  });
});

modal.addEventListener("click", () => {
  modal.classList.add("hidden");
});