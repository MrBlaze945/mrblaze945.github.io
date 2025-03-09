const navButton = document.querySelector("#nav-button");
const mainNav = document.querySelector("#main-nav");
const subNav = document.querySelector("#sub-nav");

function toggleNavigation() {
  mainNav.classList.toggle("hide-on-mobile");
  subNav.classList.toggle("hide-on-mobile");
}

navButton.addEventListener("click", toggleNavigation);

document.addEventListener("DOMContentLoaded", function () {
    const navButton = document.getElementById("nav-button");
    const mobileMenu = document.getElementById("mobile-menu");

    navButton.addEventListener("click", function () {
        // Toggle visibility of the dropdown menu
        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "block";
        }
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!navButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.style.display = "none";
        }
    });
});

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
        }
  
        // Start auto-scrolling initially
        startAutoScroll();
  
        // Detect user interaction (Mouse, Touch, Wheel, or Button Click)
        container.addEventListener("mousedown", stopAutoScroll);
        container.addEventListener("touchstart", stopAutoScroll);
        container.addEventListener("wheel", stopAutoScroll);
  
        // Stop auto-scroll when user clicks left or right button
        document.querySelectorAll(".scroll-left, .scroll-right").forEach(button => {
            button.addEventListener("click", stopAutoScroll);
        });
  
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

// JavaScript for scrolling article cards
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".scroll-container").forEach((container) => {
      const scrollArea = container.querySelector(".news-grid, .featured-news-grid");
      if (!scrollArea) return;
  
      let leftButton = container.querySelector(".scroll-left");
      let rightButton = container.querySelector(".scroll-right");
  
      // Ensure only existing buttons are used, prevent duplicates
      if (!leftButton || !rightButton) return;
  
      // Function to get the width of a single article card
      function getArticleWidth() {
        const article = scrollArea.querySelector(".news-card, .featured-news-card");
        return article ? article.offsetWidth + 10 : 200; // Default width
      }
  
      leftButton.addEventListener("click", () => {
        const articleWidth = getArticleWidth();
        scrollArea.scrollBy({ left: -articleWidth, behavior: "smooth" });
      });
  
      rightButton.addEventListener("click", () => {
        const articleWidth = getArticleWidth();
        scrollArea.scrollBy({ left: articleWidth, behavior: "smooth" });
      });
  
      // Ensure buttons appear above links
      leftButton.style.zIndex = "20";
      rightButton.style.zIndex = "20";
      scrollArea.style.position = "relative"; 
  
      // Lower the z-index of the clickable links so buttons work
      container.querySelectorAll(".review-hypertext").forEach(link => {
        link.style.zIndex = "5"; 
      });
    });
});
  
// JavaScript for scrolling article cards
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".scroll-container").forEach((container) => {
        const scrollArea = container.querySelector(".review-news-grid");
        if (!scrollArea) return;

        let leftButton = container.querySelector(".review-scroll-left");
        let rightButton = container.querySelector(".review-scroll-right");

        // Ensure only existing buttons are used, prevent duplicates
        if (!leftButton || !rightButton) return;

        // Ensure buttons are always on top
        leftButton.style.zIndex = "50";
        rightButton.style.zIndex = "50";
        scrollArea.style.position = "relative"; 

        // Lower the z-index of the clickable links so buttons work
        container.querySelectorAll(".review-hypertext").forEach(link => {
            link.style.zIndex = "5"; 
            link.style.pointerEvents = "none"; // Prevents blocking clicks on buttons
        });

        // Function to get the width of a single article card
        function getArticleWidth() {
            const article = scrollArea.querySelector(".review-news-card");
            return article ? article.offsetWidth + 10 : 200; // Default width
        }

        leftButton.addEventListener("click", () => {
            const articleWidth = getArticleWidth();
            scrollArea.scrollBy({ left: -articleWidth, behavior: "smooth" });
        });

        rightButton.addEventListener("click", () => {
            const articleWidth = getArticleWidth();
            scrollArea.scrollBy({ left: articleWidth, behavior: "smooth" });
        });
    });
});