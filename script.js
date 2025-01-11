// JavaScript for dynamic text effect
const dynamicTextElement = document.getElementById("dynamic-text");
const roles = [
  "I’m an aspiring AI / Machine Learning engineer",
  "I’m a passionate Data Scientist",
  "I’m a future AI Researcher",
  "I’m a Data-driven Decision Maker"
];
let currentRoleIndex = 0;
let typingInterval;
let deletingInterval;
let currentText = "";

// Function to type the text
function typeText() {
  let role = roles[currentRoleIndex];
  let i = 0;
  currentText = "";

  typingInterval = setInterval(() => {
    currentText += role[i];
    dynamicTextElement.textContent = currentText;
    i++;

    if (i === role.length) {
      clearInterval(typingInterval);
      setTimeout(deleteText, 2000); // Wait 2 seconds before starting to delete
    }
  }, 150); // Typing speed
}

// Function to delete the text
function deleteText() {
  let i = currentText.length;

  deletingInterval = setInterval(() => {
    currentText = currentText.slice(0, i - 1);
    dynamicTextElement.textContent = currentText;
    i--;

    if (i === 0) {
      clearInterval(deletingInterval);
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      setTimeout(typeText, 500); // Wait before typing new text
    }
  }, 100); // Deleting speed
}

// Start typing the initial text
typeText();
