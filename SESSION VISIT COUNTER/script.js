let visits = sessionStorage.getItem("visits");
visits = visits ? Number(visits) + 1 : 1;
sessionStorage.setItem("visits", visits);

document.getElementById("count").textContent =
  `Visits this session: ${visits}`;