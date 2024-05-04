document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberMeCheckbox = document.getElementById("rememberMe");
  const submitButton = document.getElementById("submit");
  const existingButton = document.getElementById("existing");

  // Check if there are saved details in local storage
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingButton.style.display = "block";
  }

  // Event listener for form submission
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = usernameInput.value;
    const password = passwordInput.value;
    const rememberMe = rememberMeCheckbox.checked;

    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    alert(`Logged in as ${username}`);
  });

  // Event listener for existing user button
  existingButton.addEventListener("click", () => {
    const savedUsername = localStorage.getItem("username");
    alert(`Logged in as ${savedUsername}`);
  });
});
