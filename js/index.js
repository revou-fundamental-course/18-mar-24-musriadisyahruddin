let links = document.querySelectorAll('a[href="#"]');

links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

document.querySelector(".navbar-toggle").addEventListener("click", function () {
  let navbarMenu = document.querySelector(".navbar-menu");
  if (navbarMenu.classList.contains("show")) {
    navbarMenu.classList.remove("show");
  } else {
    navbarMenu.classList.add("show");
  }
});

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
