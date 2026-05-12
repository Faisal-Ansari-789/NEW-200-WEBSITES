const note = document.getElementById("note");
const status = document.getElementById("status");

note.value = localStorage.getItem("note") || "";

note.addEventListener("input", () => {
  localStorage.setItem("note", note.value);
  status.textContent = "Saved";
  setTimeout(() => status.textContent = "", 1000);
});