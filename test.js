var texts = ["Hello, world!", "Welcome!", "Hey there!"];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 50; // milliseconds per character
let delayAfterTyping = 1000; // pause when text is fully typed
let delayAfterDeleting = 500; // pause when text is fully deleted

function typeText() {
  const textElement = document.getElementById("type-text");
  const currentText = texts[currentTextIndex];

  if (isDeleting) {
    // Deleting text
    textElement.textContent = currentText.substring(0, currentCharIndex - 1);
    currentCharIndex--;

    if (currentCharIndex === 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      setTimeout(typeText, delayAfterDeleting);
      return;
    }
  } else {
    // Typing text
    textElement.textContent = currentText.substring(0, currentCharIndex + 1);
    currentCharIndex++;

    if (currentCharIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeText, delayAfterTyping);
      return;
    }
  }

  setTimeout(typeText, typingSpeed);
}

// Start the typing animation when the page loads
window.onload = function () {
  typeText();
};
