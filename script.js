const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
///////////////////////////////
///////Timer
const countdown = () => {
  const countDate = new Date("Aug 30, 2022").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".minute").innerHTML = textMinute;
  document.querySelector(".second").innerHTML = textSecond;
};
setInterval(countdown, 1000);

////////////////
///////side-bar//////
const sideBar = document.querySelector(".side-bar");
const sideMenu = document.querySelector(".discription");
const closeMenu = document.querySelector(".fa-xmark");
const closeMeunBar = document.querySelector(".side-menu");
sideMenu.addEventListener("click", function () {
  sideBar.style.right = "0px";
  sideBar.style.transition = "1.5s ease-out";
});

closeMenu.addEventListener("click", function () {
  sideBar.style.right = "-33rem";
  sideBar.style.transition = "1.5s ease-out";
});

closeMeunBar.addEventListener("click", function () {
  sideBar.style.right = "-33rem";
  sideBar.style.transition = "1.5s ease-out";
});
/////////login-button
const loginBtn = document.querySelector(".loginTo");
const loginList = document.querySelector(".login");
const overlay = document.querySelector(".overlay");
const loginBtnList = document.querySelector(".login-btn");
// const sideBtn = document.querySelector(".side-btn");
loginBtn.addEventListener("click", function () {
  loginList.style.display = "block";
  overlay.style.display = "block";
});
loginBtnList.addEventListener("click", function () {
  loginList.style.display = "none";
  overlay.style.display = "none";
});
///////password////
let state = true;
function toggle() {
  if (state) {
    document.querySelector("#password").setAttribute("type", "password");
    state = false;
  } else {
    document.querySelector("#password").setAttribute("type", "text");
    state = true;
  }
}
toggle();
///////////////Tabbed section
const navLink = document.querySelectorAll(".btn-list");
const menuList = document.querySelectorAll(".menu-list");
const imgList = document.querySelectorAll(".list-img");
////////////
let tabIndex = null;
navLink.forEach((e, index) =>
  e.addEventListener("click", function () {
    tabIndex = index;
    navLink.forEach((e, index) => {
      if (tabIndex === index) {
        e.classList.add("active");
        e.style.background = "#0099ff";
        e.style.color = "#fff";
      } else {
        e.classList.remove("active");
        // e.style.background = "#757373";
        e.style.backgroundColor = "#fff";
        e.style.color = "#0099ff";
      }
    });
  })
);

navLink.forEach((e) =>
  e.addEventListener("click", function () {
    imgList.forEach((e, index) => {
      if (tabIndex === index) {
        e.style.visibility = "visible";
      } else {
        e.style.visibility = "hidden";
      }
    });

    console.log(e);
  })
);

//////////////shoping-cart
const cartItem = document.querySelectorAll(".cart-detalis");
const removeCartBtn = document.querySelectorAll(".btn-remove");

let inputValue = document.querySelectorAll(".quantity-input");
let totalCart = document.querySelectorAll(".total-price");
let cartRows = document.querySelectorAll(".cart-row ");
let cartItems = document.querySelectorAll(".cart-items");

// ////////////total price function not declare
function totalPrice() {
  let cartrow = cartItems[0];

  let cartproduct = cartrow.querySelectorAll(".cart-row");

  let total = 0;

  cartproduct.forEach((_, i) => {
    let cartElment = cartproduct[i];
    let priceEl = cartElment.querySelectorAll(".cart-price")[0];
    let quantityEl = cartElment.querySelectorAll(".quantity-input")[0];
    let price = parseFloat(priceEl.innerText.replace("$", ""));
    let quantity = quantityEl.value;
    total = total + price * quantity;
  });

  totalCart[0].innerText = "$" + total;
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
  console.log(button);
}
function addToHTML(price, title, image) {
  let cartItems = document.querySelector(".cart-items");
  // let itemName = cartItems.querySelectorAll(".cart-item-title");
  // for (let i = 0; i < itemName.length; i++) {
  //   if (itemName[i].innerText === title) {
  //     alert("You already have this in the cart");
  //     return;
  //   }
  //   console.log(itemName[i]);
  // }

  const html = `
      <div class="cart-row cart-detalis">
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
  cartItems.querySelectorAll(".btn-remove")[0].addEventListener("click", () => {
    document.querySelectorAll(".cart-detalis")[0].remove();
    totalPrice();
    addCartNum.innerHTML--;
  });
}

const addCartNum = document.querySelector(".basket");
let cartNum = function () {
  for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener("click", () => {
      addCartNum.innerHTML++;

      console.log(addCartNum.innerHTML);
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
const purchaseButton = document.querySelector(".btn-purchase");
purchaseButton.addEventListener("click", () => {
  cartContainer.style.visibility = "hidden";
  addCartNum.innerHTML = "0";
  cartItems[0].innerHTML = "";
  totalCart[0].innerText = "$" + "0.00";
  overlay.style.display = "none";

  alert("Thank you for your purches");
});
//////////nav-bar sticky
const nav=document.querySelector('.nav-bar')
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const slidersSection = document.querySelector(".sliders");
const slidersCoords = slidersSection.getBoundingClientRect();
console.log(slidersCoords);
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > slidersCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
/////////////Section Tabs////////
const open = document.querySelectorAll(".open");
const close = document.querySelectorAll(".close");
const infoText = document.querySelectorAll(".info-text");
const infoTitle = document.querySelectorAll(".info-title");
// const content = document.querySelectorAll(".text-conten");
//////////////////////

////////////////////
infoTitle.forEach((e, i) => {
  e.addEventListener("click", () => {
    infoText.forEach((t) => {
      t.classList.add("active-section");

      open.forEach((m) => {
        m.style.visibility = "visible";
      });
      close.forEach((n) => {
        n.classList.add("active-section");
      });
      infoTitle.forEach((b) => {
        b.style.backgroundColor = "";
      });
    });
    open[i].style.visibility = "hidden";
    infoText[i].classList.remove("active-section");
    close[i].classList.remove("active-section");
    infoTitle[i].style.backgroundColor = "";
    console.log(infoText[i]);
  });
});
close.forEach((e, i) => {
  e.addEventListener("click", () => {
    e.classList.add("active-section");
    console.log(e);
    infoText.forEach((u) => {
      u.classList.add("active-section");
    });
    infoTitle.forEach((b) => {
      b.style.backgroundColor = "";
    });
    open.forEach((w) => {
      // w.classList.remove("active")
      w.style.visibility = "visible";
    });
    console.log(infoText[i]);
  });
});
///////////join now
const displayForm=document.querySelector("#display-form")
const firstName = document.querySelector("#first-name");
const displayName = document.querySelector("#display-name");
const form = document.querySelector("#join-now");
const submitBtn=document.querySelector("#join")
const loginTo = document.querySelector(".loginTo");
const user=document.querySelector(".user")
displayForm.addEventListener("click",()=>{
  form.style.visibility='visible'
  displayForm.style.display='none'
  loginTo.style.display='none'
  overlay.style.display = "block";
})
submitBtn.addEventListener("click",(e)=>{
   
    displayName.innerHTML = firstName.value;
    firstName.value=''
   firstName.placeholder = "";
   form.style.display="none"
   user.style.display = "block";
   overlay.style.display = "none";
// console.log(firstName.vlaue);
})
////////////Mode
const mode = document.querySelector(".fa-toggle-on");
mode.addEventListener("click",()=>{
  document.body.classList.toggle("dark")
})
///////capital-city
const countriesContainer = document.querySelector(".countries");
const getCapital = document.querySelector("#capital");
const capitalBtn = document.querySelector(".capital-btn");
const displayCountry = document.querySelector(".display-country");

const render = function (data) {
  const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="capital__name"><span class="capital">${getCapital.value}</span>  is the capital city of</h3>

    <h3 class="country__name"> ${data.name}</h3>

    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountry1 = function () {
  fetch(`https://restcountries.com/v2/capital/${getCapital.value}`)
    .then((response) => response.json())
    .then((data) => render(data[0]));
  //  getCapital.value=''
};
// getCountry1("london")
capitalBtn.addEventListener("click", () => {
  getCountry1();
  console.log(getCapital.value);
  //    getCapital.value=''
});

