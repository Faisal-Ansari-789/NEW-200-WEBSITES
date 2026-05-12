const password = "admin123";
let tries = 3;

function check() {
  if (document.getElementById("input").value === password) {
    document.getElementById("result").innerText = "Access Granted";
  } else {
    tries--;
    document.getElementById("result").innerText =
      tries > 0 ? "Wrong! Tries left: " + tries : "Locked!";
  }
}