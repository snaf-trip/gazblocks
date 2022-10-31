let menuBtn = document.querySelector(".header__menuButton");
let mobileMenu = document.querySelector(".header__mobileMenu");
let menuItems = mobileMenu.querySelectorAll(".header__mobileNavItem");
let cross = document.querySelector(".plate4");
let body = document.getElementById("body");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("header__mobileMenu_open");
  body.classList.toggle("no-scroll");
});

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", () => {
    mobileMenu.classList.toggle("header__mobileMenu_open");
    cross.classList.toggle("active");
    body.classList.remove("no-scroll");
  })
}
