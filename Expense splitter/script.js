function split() {
  const amt = amount.value;
  const p = people.value;
  if (amt && p) {
    result.innerText = "Each pays ₹" + (amt / p).toFixed(2);
  }
}