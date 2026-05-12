const timeEl = document.getElementById("time");
const target = new Date(Date.now() + 86400000); // 24 hours

setInterval(() => {
  const diff = target - new Date();
  if (diff <= 0) {
    timeEl.textContent = "Time's up!";
    return;
  }
  const h = Math.floor(diff / 3600000);
  const m = Math.floor(diff % 3600000 / 60000);
  const s = Math.floor(diff % 60000 / 1000);
  timeEl.textContent = `${h}h ${m}m ${s}s`;
}, 1000);