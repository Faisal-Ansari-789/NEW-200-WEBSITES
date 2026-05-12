const title = document.getElementById("title");
const desc = document.getElementById("desc");

const pTitle = document.getElementById("pTitle");
const pDesc = document.getElementById("pDesc");

[title, desc].forEach(el => {
  el.addEventListener("input", () => {
    pTitle.textContent = title.value;
    pDesc.textContent = desc.value;
  });
});