let showMoreBtn = document.querySelector(".products__showMoreBtn");
let productsList = document.querySelector(".products__list");
let buttonText = document.querySelector(".products__showMore_btnText");
let hiden = document.querySelector(".hiden");
let showMoreSvg = document.querySelector(".products__showMoreSvg");

let flag = false;

showMoreBtn.onclick = () => {
  console.log(flag);
  if (flag === false) {
    productsList.style.height = "1054px";
    hiden.style.display = "flex";
    buttonText.textContent = "скрыть";
    showMoreSvg.style.transform = "rotate(135deg)";
  } else {
    productsList.style.height = "527px";
    hiden.style.display = "none";
    buttonText.textContent = "показать ещё";
    showMoreSvg.style.transform = "rotate(225deg)";
  }
  flag = !flag;
};