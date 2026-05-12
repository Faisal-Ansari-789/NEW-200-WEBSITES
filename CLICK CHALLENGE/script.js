let count = 0;
let timeLeft = 5;

function clickMe() {
  count++;
  document.getElementById("count").textContent = count;
}

const timer = setInterval(()=>{
  timeLeft--;
  document.getElementById("time").textContent = "Time left: " + timeLeft;
  if(timeLeft===0){
    clearInterval(timer);
    alert("Score: " + count);
  }
},1000);