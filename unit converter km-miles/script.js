function convert() {
  let km = document.getElementById("km").value;
  let miles = (km * 0.621371).toFixed(2);
  document.getElementById("out").innerText = miles + " miles";
}