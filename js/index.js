let links = document.querySelectorAll('a[href="#"]');

links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
    });
});

document.querySelector(".navbar-toggle").addEventListener("click", function () {
    let navbarMenu = document.querySelector(".navbar-menu");
    if (navbarMenu.classList.contains("responsive")) {
        navbarMenu.classList.remove("responsive");
    } else {
        navbarMenu.classList.add("responsive");
    }
});
