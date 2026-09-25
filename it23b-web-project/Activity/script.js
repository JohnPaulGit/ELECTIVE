// Select HTML elements
const themeButton = document.getElementById('theme-btn');
const body = document.body;

// Listen for click events
themeButton.addEventListener('click', () => {
  // Toggle the dark-mode class on the body tag
  body.classList.toggle('dark-mode');

  // Update button label dynamically
  if (body.classList.contains('dark-mode')) {
    themeButton.textContent = 'Switch to Light Mode';
  } else {
    themeButton.textContent = 'Switch to Dark Mode';
  }
});