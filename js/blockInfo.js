let blocks = document.querySelectorAll(".products__item");
let popup = document.querySelector(".popup");
let popupContent = document.querySelector(".popup-content");
let popupHeader = document.querySelector(".popup__header");
let popupImg = popupContent.querySelector(".popup__img");
let closeBtn = document.querySelector(".popup__closeSvg");

for (let i = 0; i <= blocks.length; i++) {
  let block = blocks[i];
  let button = block.querySelector(".products__productInfoBtn");
  button.onclick = function () {
    popup.classList.remove("hidden");

    // popupHeader.textContent = block.querySelector(
    //   ".products__productName"
    // ).textContent;

    popupImg.src = block.querySelector(".products__itemImg").src;

    closeBtn.onclick = function () {
      popup.classList.add("hidden");
    };
  };
}
