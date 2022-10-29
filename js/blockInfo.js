let blocks = document.querySelectorAll(".products__item");
let popup = document.querySelector(".popup");
let popupContent = document.querySelector(".popup-content");

for (let i = 0; i <= blocks.length; i++) {
  let block = blocks[i];
  let button = block.querySelector(".products__productInfoBtn");
  button.onclick = function () {
    popup.classList.remove("hidden");
    popupContent.textContent = block.querySelector(
      ".products__productName"
    ).textContent;
    popup.onclick = function () {
      popup.classList.add("hidden");
    };
  };
}
