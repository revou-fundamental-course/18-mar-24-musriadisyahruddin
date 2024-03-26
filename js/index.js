let links = document.querySelectorAll('a[href="#"]');

links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

document.querySelector(".navbar-toggle").addEventListener("click", function () {
  toggleNavbar();
});

function toggleNavbar() {
  let navbarMenu = document.querySelector(".navbar-menu");
  if (navbarMenu.classList.contains("show")) {
    navbarMenu.classList.remove("show");
  } else {
    navbarMenu.classList.add("show");
  }
}

function autoSlide() {
  let currentSlide = 0;
  let slides = document.querySelectorAll(".carousel-item");
  let totalSlides = slides.length;
  let carouselInner = document.querySelector(".carousel-inner");

  setInterval(function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    let slideWidth = slides[0].offsetWidth;
    let translateX = -currentSlide * slideWidth;
    carouselInner.style.transform = "translateX(" + translateX + "px)";
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  autoSlide();
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.add("active");
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.classList.remove("active");
    scrollToTopBtn.removeAttribute("style");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    scrollToTop();
  });

var menuLinks = document.querySelectorAll(".navbar-menu a");

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", function (e) {
    e.preventDefault();
    toggleNavbar();
    var targetId = this.getAttribute("href");
    var targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
