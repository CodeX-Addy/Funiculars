var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("active");
})

function validateForm() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if all fields are filled
  if (!username || !email || !password) {
    alert("Please fill out all fields.");
    return false;
  }

  // Check if username is alphanumeric
  const usernameRegex = /^[a-z0-9]+$/i;
  if (!usernameRegex.test(username)) {
    alert("Username must be alphanumeric.");
    return false;
  }

  // Check if email is valid
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Check if password is at least 8 characters long
  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  // Check if password contains at least one number and one letter
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Password must contain at least one number and one letter.");
    return false;
  }

  return true;
}
