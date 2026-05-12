function startTimer() {
  let time = document.getElementById("seconds").value;
  let out = document.getElementById("output");

  let interval = setInterval(() => {
    out.innerText = time;
    time--;

    if (time < 0) {
      clearInterval(interval);
      out.innerText = "Done!";
    }
  }, 1000);
}