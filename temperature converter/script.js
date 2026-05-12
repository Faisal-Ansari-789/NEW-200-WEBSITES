function convert() {
  let c = document.getElementById("temp").value;
  let f = (c * 9/5) + 32;
  document.getElementById("out").innerText = f + " °F";
}