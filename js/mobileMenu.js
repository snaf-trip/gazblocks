let menuBtn = document.querySelector(".header__menuButton");
let mobileMenu = document.querySelector(".header__mobileMenu");
let body = document.getElementById("body");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("header__mobileMenu_open");
  body.classList.toggle("no-scroll")
});
