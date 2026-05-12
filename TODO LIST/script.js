let dragged = null;

document.querySelectorAll(".task").forEach(t => {
  t.addEventListener("dragstart", () => dragged = t);
});

document.querySelectorAll(".col").forEach(col => {
  col.addEventListener("dragover", e => e.preventDefault());
  col.addEventListener("drop", () => {
    if(dragged) col.appendChild(dragged);
  });
});