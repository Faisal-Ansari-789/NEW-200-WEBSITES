let count = 0;
let interval;

function start() {
  interval = setInterval(() => {
    count++;
    document.getElementById("time").innerText = count;
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  stop();
  count = 0;
  document.getElementById("time").innerText = count;
}