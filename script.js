function checkEmail() {
  const email = document.getElementById("emailInput").value;

  if (email.includes("@")) {
    document.getElementById("result").textContent = "Valid";
  } else {
    document.getElementById("result").textContent = "Invalid";
  }
}
