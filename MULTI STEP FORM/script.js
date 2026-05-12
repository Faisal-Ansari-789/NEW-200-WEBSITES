const steps = document.querySelectorAll(".step");
const next = document.getElementById("next");
const bar = document.getElementById("bar");

let current = 0;

next.addEventListener("click", () => {
  if(current === 0 && !name.value) return alert("Enter name");
  if(current === 1 && !email.value.includes("@")) return alert("Invalid email");

  steps[current].classList.remove("active");
  current++;

  if(current < steps.length){
    steps[current].classList.add("active");
    bar.style.width = (current/(steps.length-1))*100 + "%";
  } else {
    next.disabled = true;
  }
});