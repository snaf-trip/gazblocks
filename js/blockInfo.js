let blocks = document.querySelectorAll(".products__item");
let popup = document.querySelector(".popup");
let popupContent = document.querySelector(".popup-content");
let popupImg = popupContent.querySelector(".popup__img");
let closeBtn = document.querySelector(".popup__closeSvg");
let width = document.querySelector(".width");
let length = document.querySelector(".length");
let height = document.querySelector(".height");
let density = document.querySelector(".density");

for (let i = 0; i <= blocks.length; i++) {
  let block = blocks[i];
  let button = block.querySelector(".products__productInfoBtn");
  button.onclick = function () {
    popup.classList.remove("hidden");

    width.textContent = block.querySelector(".product__width").textContent;
    length.textContent = block.querySelector(".product__length").textContent;
    height.textContent = block.querySelector(".product__height").textContent;
    density.textContent = block.querySelector(".product__density").textContent;

    popupImg.src = block.querySelector(".products__itemImg").src;

    closeBtn.onclick = function () {
      popup.classList.add("hidden");
    };
  };
}
