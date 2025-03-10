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

        if (mobileMenu.style.display === "block") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "block";
        }
    });


    document.addEventListener("click", function (event) {
        if (!navButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.style.display = "none";
        }
    });
});

/* ----------------------------- TABS SECTION ----------------------------- */

function showTab(tabName) {

  document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
  });


  document.querySelectorAll('.tabs button').forEach(button => {
      button.classList.remove('active');
  });


  document.getElementById(tabName).style.display = 'block';


  document.querySelector(`.tabs button[onclick="showTab('${tabName}')"]`).classList.add('active');
}


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
            if (userInteracted || !items.length) return;

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
            if (!userInteracted) { 
                userInteracted = true;
                clearInterval(autoScrollInterval);
            }
        }

        startAutoScroll();

        ["mousedown", "touchstart", "wheel"].forEach(event => {
            container.addEventListener(event, stopAutoScroll, { once: true });
        });

        document.querySelectorAll(".scroll-left, .scroll-right").forEach(button => {
            button.addEventListener("click", stopAutoScroll, { once: true });
        });

        let lastScrollLeft = container.scrollLeft;
        container.addEventListener("scroll", () => {
            if (Math.abs(container.scrollLeft - lastScrollLeft) > 5) {
                stopAutoScroll();
            }
            lastScrollLeft = container.scrollLeft;
        }, { once: true });
    }

    autoScroll(".featured-news-grid", ".featured-news-card");
});


/* ------------------------------ AUT0 SCROLL ----------------------------- */

/* ------------------------------ BUTTON CONTROLLS ----------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".scroll-container").forEach((container) => {
      const scrollArea = container.querySelector(".news-grid, .featured-news-grid");
      if (!scrollArea) return;
  
      let leftButton = container.querySelector(".scroll-left");
      let rightButton = container.querySelector(".scroll-right");
  
      if (!leftButton || !rightButton) return;
  
      function getArticleWidth() {
        const article = scrollArea.querySelector(".news-card, .featured-news-card");
        return article ? article.offsetWidth + 10 : 200;
      }
  
      leftButton.addEventListener("click", () => {
        const articleWidth = getArticleWidth();
        scrollArea.scrollBy({ left: -articleWidth, behavior: "smooth" });
      });
  
      rightButton.addEventListener("click", () => {
        const articleWidth = getArticleWidth();
        scrollArea.scrollBy({ left: articleWidth, behavior: "smooth" });
      });
  
      leftButton.style.zIndex = "20";
      rightButton.style.zIndex = "20";
      scrollArea.style.position = "relative"; 
  
      container.querySelectorAll(".review-hypertext").forEach(link => {
        link.style.zIndex = "5"; 
      });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".scroll-container").forEach((container) => {
        const scrollArea = container.querySelector(".review-news-grid");
        if (!scrollArea) return;

        let leftButton = container.querySelector(".review-scroll-left");
        let rightButton = container.querySelector(".review-scroll-right");

        if (!leftButton || !rightButton) return;

        leftButton.style.zIndex = "50";
        rightButton.style.zIndex = "50";
        scrollArea.style.position = "relative";

        function getArticleWidth() {
            const article = scrollArea.querySelector(".review-news-card");
            return article ? article.offsetWidth + 10 : 200;
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

/* ------------------------------ BUTTON CONTROLLS ----------------------------- */