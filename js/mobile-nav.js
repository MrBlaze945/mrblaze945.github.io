const navButton = document.querySelector("#nav-button");
const mainNav = document.querySelector("#main-nav");
const subNav = document.querySelector("#sub-nav");

function toggleNavigation() {
  mainNav.classList.toggle("hide-on-mobile");
  subNav.classList.toggle("hide-on-mobile");
}

navButton.addEventListener("click", toggleNavigation);

function showTab(tabName) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
  });

  // Remove active class from all buttons
  document.querySelectorAll('.tabs button').forEach(button => {
      button.classList.remove('active');
  });

  // Show the selected tab
  document.getElementById(tabName).style.display = 'block';

  // Set active class on clicked button
  document.querySelector(`.tabs button[onclick="showTab('${tabName}')"]`).classList.add('active');
}

// Ensure the default tab is visible
document.addEventListener("DOMContentLoaded", () => {
  showTab('popular');
});