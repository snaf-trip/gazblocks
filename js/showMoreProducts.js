let showMoreBtn = document.querySelector(".products__showMore_btnAndText");
let buttonText = document.querySelector(".products__showMore_btnText");
let showMoreSvg = document.querySelector(".products__showMoreSvg");
let productsList = document.querySelector(".products__list");
let prodListArr = Array.from(productsList.children);

let flag = false;
showMoreBtn.onclick = () => {
  if (flag === false) {
    prodListArr.forEach((el) => el.classList.add("isVisible"));
    buttonText.textContent = "скрыть";
    showMoreSvg.style.transform = "rotate(135deg)";
  } else {
    prodListArr.forEach((el) => el.classList.remove("isVisible"));
    buttonText.textContent = "показать ещё";
    showMoreSvg.style.transform = "rotate(225deg)";
  }
  flag = !flag;
};
