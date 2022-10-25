let header = document.getElementById("header");

window.addEventListener("scroll", () => {
  console.log(window.innerWidth > 785);

  if (window.innerWidth >= 785) {
    if (window.scrollY !== 0) {
      header.style.transition = "0.5s";
      header.style.height = "60px";
    } else {
      header.style.height = "80px";
    }
  }
});
