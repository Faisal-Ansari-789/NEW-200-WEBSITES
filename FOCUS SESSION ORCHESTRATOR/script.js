let duration = 25 * 60;
let remaining = duration;
let interval;
let interruptions = 0;

function start() {
  clearInterval(interval);
  document.getElementById("status").innerText = "Status: Focusing";
  interval = setInterval(tick, 1000);
}

function interrupt() {
  interruptions++;
  document.getElementById("status").innerText =
    `Interrupted (${interruptions})`;
}

function tick() {
  remaining--;
  render();

  if (remaining <= 0) {
    clearInterval(interval);
    adaptNextSession();
  }
}

function render() {
  const min = Math.floor(remaining / 60);
  const sec = remaining % 60;
  document.getElementById("timer").innerText =
    `${min}:${sec.toString().padStart(2, "0")}`;
}

function adaptNextSession() {
  if (interruptions > 3) duration = 15 * 60;
  else duration = 30 * 60;

  remaining = duration;
  interruptions = 0;
  document.getElementById("status").innerText =
    "Session Complete. Adapted next session.";
}