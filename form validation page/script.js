function validate() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if (!email.includes("@") || pass.length < 6) {
    document.getElementById("msg").innerText = "Invalid details";
  } else {
    document.getElementById("msg").innerText = "Form submitted";
  }
}