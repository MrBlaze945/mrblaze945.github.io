const navButton = document.querySelector("#nav-button");
const mainNav = document.querySelector("#main-nav");
const subNav = document.querySelector("#sub-nav");

function toggleNavigation() {
  mainNav.classList.toggle("hide-on-mobile");
  subNav.classList.toggle("hide-on-mobile");
}

navButton.addEventListener("click", toggleNavigation);

/* ----------------------------- TABS SECTION ----------------------------- */

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

/* ----------------------------- TABS SECTION ----------------------------- */

/* ------------------------------ AUT0 SCROLL ----------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  function autoScroll(containerSelector, itemSelector, interval = 3000) {
      const container = document.querySelector(containerSelector);
      if (!container) return;

      const items = container.querySelectorAll(itemSelector);
      let index = 0;
      let autoScrollInterval;
      let userInteracted = false;
      let userScrollTimeout;

      function scrollNext() {
          if (!items.length || userInteracted) return;

          index++;
          if (index >= items.length) {
              index = 0;
          }

          const scrollAmount = items[index].offsetLeft - container.offsetLeft;
          container.scrollTo({
              left: scrollAmount,
              behavior: "smooth",
          });
      }

      function startAutoScroll() {
          autoScrollInterval = setInterval(scrollNext, interval);
      }

      function stopAutoScroll() {
          userInteracted = true; // User has interacted, stop auto-scrolling
          clearInterval(autoScrollInterval);

          // Restart auto-scroll if user stops interacting after 5 seconds
          clearTimeout(userScrollTimeout);
          userScrollTimeout = setTimeout(() => {
              userInteracted = false;
              startAutoScroll();
          }, 5000);
      }

      // Start auto-scrolling initially
      startAutoScroll();

      // Detect user interaction (Mouse, Touch, or Wheel)
      container.addEventListener("mousedown", stopAutoScroll);
      container.addEventListener("touchstart", stopAutoScroll);
      container.addEventListener("wheel", stopAutoScroll);

      // Detect user scrolling, but prevent false positives from script-triggered scrolling
      let lastScrollLeft = container.scrollLeft;
      container.addEventListener("scroll", () => {
          if (Math.abs(container.scrollLeft - lastScrollLeft) > 5) {
              stopAutoScroll();
          }
          lastScrollLeft = container.scrollLeft;
      });
  }

  autoScroll(".featured-news-grid", ".featured-news-card");
});

/* ------------------------------ AUT0 SCROLL ----------------------------- */