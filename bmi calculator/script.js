function calcBMI() {
  let w = document.getElementById("weight").value;
  let h = document.getElementById("height").value / 100;
  let bmi = (w / (h * h)).toFixed(2);
  document.getElementById("result").innerText = "BMI: " + bmi;
}