let showMoreBtn = document.querySelector(".products__showMoreBtn");
let productsList = document.querySelector(".products__list");
let buttonText = document.querySelector(".products__showMore_btnText");
let hiden = document.querySelector(".hiden");

let flag = false;

showMoreBtn.onclick = () => {
  console.log(flag);
  if (flag === false) {
    productsList.style.height = "auto";
    hiden.style.display = "flex";
    buttonText.textContent = "скрыть";
  } else {
    productsList.style.height = "527px";
    hiden.style.display = "none";
    buttonText.textContent = "показать ещё";
  }
  flag = !flag;
};
