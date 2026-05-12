let dark = false;

function setColor(c) {
  document.documentElement.style.setProperty("--text", c);
}

function toggle() {
  dark = !dark;
  document.documentElement.style.setProperty("--bg", dark ? "#111" : "white");
  document.documentElement.style.setProperty("--text", dark ? "white" : "black");
}