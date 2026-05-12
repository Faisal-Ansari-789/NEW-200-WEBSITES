let time = 5;
let active = true;

const countdown = setInterval(() => {
  time--;
  document.getElementById("timer").innerText = time;
  if (time === 0) {
    active = false;
    clearInterval(countdown);
    document.getElementById("msg").innerText = "💥 Boom!";
  }
}, 1000);

function defuse() {
  if (active) {
    clearInterval(countdown);
    document.getElementById("msg").innerText = "Bomb Defused!";
  }
}