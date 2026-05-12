const data = {
  click: 0,
  scroll: 0,
  idle: 0
};

function logAction(type) {
  data[type]++;
  render();
}

function render() {
  document.getElementById("report").innerHTML = `
    Clicks: ${data.click}<br>
    Scrolls: ${data.scroll}<br>
    Idle Moments: ${data.idle}<br><br>
    Dominant Behavior: <b>${dominant()}</b>
  `;
}

function dominant() {
  return Object.keys(data).reduce((a, b) =>
    data[a] > data[b] ? a : b
  );
}