//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberMeCheckbox = document.getElementById("rememberMe");
  const submitButton = document.getElementById("submit");

  // Check if there are saved details in local storage
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    const existingButton = document.createElement("button");
    existingButton.id = "existing";
    existingButton.textContent = "Login as existing user";
    existingButton.addEventListener("click", () => {
      alert(`Logged in as ${savedUsername}`);
    });
    document.body.appendChild(existingButton);
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
});

