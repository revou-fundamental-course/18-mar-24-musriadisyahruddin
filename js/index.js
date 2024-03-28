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

var forms = document.querySelectorAll("form.needs-validation");

forms.forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      form
        .querySelectorAll("input, select, textarea")
        .forEach(function (input) {
          customCheckValidity(input);
          input.addEventListener("keyup", function () {
            customCheckValidity(input);
          });
        });

      form.classList.add("was-validated");
      if (form.checkValidity()) {
        // Karena halaman ini hanya 1 dan untuk uji coba, maka fungsi submit saya alihkan ke alert
        event.preventDefault();
        event.stopPropagation();

        let data = serializeForm(form);
        let pesanAlert = `\nForm berhasil disubmit dengan data:

    1. Nama: ${data.nama}
    2. Email: ${data.email}
    3. Pesan: ${data.pesan}`;
        alert(pesanAlert);
        window.location.reload();
      } else {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    false
  );
});

function customCheckValidity(input) {
  if (!input.checkValidity()) {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
  } else {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
  }
}

function serializeForm(form) {
  var formData = {};
  var formElements = form.elements;

  for (var i = 0; i < formElements.length; i++) {
    var element = formElements[i];
    var elementName = element.name;
    var elementValue = element.value;

    if (elementName && !element.disabled) {
      if (element.type === "radio" || element.type === "checkbox") {
        if (element.checked) {
          formData[elementName] = elementValue;
        }
      } else {
        formData[elementName] = elementValue;
      }
    }
  }

  return formData;
}
