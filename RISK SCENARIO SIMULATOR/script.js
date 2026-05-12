let riskLevel = 3;   // 1–5
let rewardLevel = 2;

function decide(action) {
  const chance = Math.random();

  if (action === "invest") {
    if (chance > riskLevel / 5) {
      rewardLevel++;
      outcome("Investment succeeded. Reward increased.");
    } else {
      rewardLevel--;
      outcome("Investment failed. Reward reduced.");
    }
  } else {
    riskLevel--;
    outcome("Risk avoided. Stability increased.");
  }

  updateStats();
}

function updateStats() {
  document.getElementById("risk").innerText =
    riskLevel > 3 ? "High" : riskLevel > 1 ? "Medium" : "Low";

  document.getElementById("reward").innerText =
    rewardLevel > 3 ? "High" : rewardLevel > 1 ? "Medium" : "Low";
}

function outcome(text) {
  document.getElementById("result").innerText = text;
}