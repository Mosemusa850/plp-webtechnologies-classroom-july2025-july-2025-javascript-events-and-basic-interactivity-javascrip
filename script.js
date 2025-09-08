// js/script.js

// Part 1: JavaScript Event Handling
// Click event: Toggle light/dark mode
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleThemeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode"; // Q3: Change button text
});

// Mouseover event: Update hover area text
const hoverArea = document.getElementById("hoverArea");
hoverArea.addEventListener("mouseover", () => {
  hoverArea.textContent = "You hovered over me!"; // Q2: onmouseover
});
hoverArea.addEventListener("mouseout", () => {
  hoverArea.textContent = "Hover over me!";
});

// Key input event: Display typing feedback
const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");
keyInput.addEventListener("input", () => {
  keyOutput.textContent = keyInput.value
    ? `You typed: ${keyInput.value}`
    : "Typing feedback will appear here.";
});

// Part 2: Interactive Elements
// Interactive Feature 1: Light/Dark Mode Toggle (implemented above)

// Interactive Feature 2: Collapsible FAQ Section
function toggleFAQ(id) { // Q1: onclick
  const faqAnswer = document.getElementById(`faq${id}`);
  faqAnswer.style.display = faqAnswer.style.display === "none" ? "block" : "none";
}

// Part 3: Form Validation
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formOutput = document.getElementById("formOutput");

// Email regex for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form submission validation
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Q6: Prevent default submission
  let isValid = true;

  // Validate name
  if (nameInput.value.trim() === "") { // Q5: Check empty field
    nameError.textContent = "Name cannot be empty.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate email
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate password
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Display success or failure
  formOutput.textContent = isValid
    ? "Form submitted successfully!"
    : "Please fix the errors above.";
});

// Password toggle (Q8)
const togglePassword = document.getElementById("togglePassword");
togglePassword.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  togglePassword.textContent = passwordInput.type === "password" ? "Show Password" : "Hide Password";
});