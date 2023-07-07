const cartItem = document.querySelectorAll(".cart-details");
const removeCartBtn = document.querySelectorAll(".btn-remove");

let inputValue = document.querySelectorAll(".quantity-input");
let totalCart = document.querySelectorAll(".total-price");
let cartRows = document.querySelectorAll(".cart-row ");
let cartItems = document.querySelectorAll(".cart-items");
function totalPrice() {
  let cartRow = cartItems[0];

  let cartProducts = cartRow.querySelectorAll(".cart-row");

  let total = 0;

  cartProducts.forEach((_, i) => {
    let cartElement = cartProducts[i];
    let priceEl = parseFloat(
      cartElement.querySelectorAll(".cart-price")[0].innerHTML.split(" ")[2]
    );
    let quantityEl = cartElement.querySelectorAll(".quantity-input")[0];
    // let price = parseFloat(priceEl.innerHTML.replace("$", ""));
    let quantity = parseFloat(quantityEl.value);
    // total = total + price * quantity;
    total = total + priceEl * quantity;
  });

  totalCart[0].innerHTML = "$" + total;
}
totalPrice();
const changeInputValue = function () {
  for (let i = 0; i < inputValue.length; i++) {
    let input = inputValue[i];
    input.addEventListener("change", function () {
      totalPrice();
    });
  }
};
changeInputValue();

// ////////Add to the cart button
const addToCart = document.querySelectorAll(".add-cart-btn");
const shoppingItem = document.querySelectorAll(".shopping-item");

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", addNewProduct, totalPrice);
}

function addNewProduct(e) {
  let button = e.target;
  let item = button.parentElement;
  const price = item.querySelectorAll(".price")[0].innerHTML;
  const title = item.querySelectorAll(".title")[0].innerHTML;
  const image = item.querySelectorAll(".item-img")[0].src;
  addToHTML(price, title, image);
  totalPrice();
  
}
function addToHTML(price, title, image) {
  let cartItems = document.querySelector(".cart-items");

  const html = `
      <div class="cart-row cart-details">
              <div class="cart-item">
                <img class="item-img" src="${image}" />
                <span class="cart-item-title">${title}</span>
              </div>
              <span class="cart-price">${price}</span>
              <div class="cart-quantity">
                <input class="quantity-input" type="number" value="1" min="1" />
                <button class="btn-remove" type="button">REMOVE</button>
              </div>
            </div>
      `;

  cartItems.insertAdjacentHTML("afterbegin", html);

  cartItems.addEventListener("change", function () {
    totalPrice();
  });
  cartItems.querySelectorAll(".btn-remove")[0].addEventListener("click", (e) => {
    document.querySelectorAll(".cart-details")[0].remove();
    totalPrice();
    addCartNum.innerHTML--;
  });
}

const addCartNum = document.querySelector(".basket");
let cartNum = function () {
  for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener("click", () => {
      addCartNum.innerHTML++;

    });
  }
};
cartNum();
const cartBasket = document.querySelector(".fa-cart-shopping");
const cartContainer = document.querySelector(".car-container");
cartBasket.addEventListener("click", () => {
  cartContainer.style.visibility = "visible";
  overlay.style.display = "block";
});
// const cartContainer = document.querySelector(".car-container");
const overlay = document.querySelector(".overlay");

const purchaseButton = document.querySelector(".btn-purchase");
purchaseButton.addEventListener("click", () => {
  cartContainer.style.visibility = "hidden";
  addCartNum.innerHTML = "0";
  cartItems[0].innerHTML = "";
  totalCart[0].innerText = "$" + "0.00";
  overlay.style.display = "none";

  alert("Thank you for your parches");
});
