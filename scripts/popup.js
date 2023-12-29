let items = document.querySelector(".popup");

let close = document.querySelector(".btn-close");
let button = document.querySelector(".btn-buy_now");

const nameSmartphone = document.querySelector('#name__product');
const nameText = nameSmartphone.textContent;
const price = document.querySelector('.product__price-value');
const priceText = price.textContent;

const change_valueName = document.querySelector('title')
change_valueName.textContent = nameText

function vision() {
  items.classList.add("is-active");
  const changeValueName = document.querySelector('#order__name')
  changeValueName.textContent = nameText
  const changeValuePrice = document.querySelector('#order__price')
  changeValuePrice.textContent = priceText
}

function unvision() {
  items.classList.remove("is-active");
}

button.addEventListener("click", vision);
close.addEventListener("click", unvision);

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    items.classList.remove("is-active");
  }
});

document.addEventListener('click', function (e) {
  let close = document.querySelector(".popup__inner");
  if (e.target === close) {
    items.classList.remove("is-active");
  }
});


