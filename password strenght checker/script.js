const pass = document.getElementById("pass");
const msg = document.getElementById("msg");

pass.addEventListener("input", () => {
  let p = pass.value;

  if (p.length < 4) msg.innerText = "Weak";
  else if (p.length < 8) msg.innerText = "Medium";
  else msg.innerText = "Strong";
});