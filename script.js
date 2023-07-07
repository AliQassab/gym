import "./shoppingCart.js";
import "./timer.js";
import "./sections.js";
import "./slides.js";
import "./country.js";
import "./sideBar.js"

////login-button
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

// ///////password////
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
const showPassword = document.querySelector(".fa-eye");
showPassword.addEventListener("click",toggle)


 
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
  })
);

///nav-bar sticky
const nav = document.querySelector(".nav-bar");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const slidersSection = document.querySelector(".sliders");
const slidersCoords = slidersSection.getBoundingClientRect();
window.addEventListener("scroll", () => {
  if (window.scrollY > slidersCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

///join now
const displayForm = document.querySelector("#display-form");
const firstName = document.querySelector("#first-name");
const displayName = document.querySelector("#display-name");
const form = document.querySelector("#join-now");
const submitBtn = document.querySelector("#join");
const loginTo = document.querySelector(".loginTo");
const user = document.querySelector(".user");
displayForm.addEventListener("click", () => {
  form.style.visibility = "visible";
  displayForm.style.display = "none";
  loginTo.style.display = "none";
  overlay.style.display = "block";
});
submitBtn.addEventListener("click", (e) => {
  displayName.innerHTML = firstName.value;
  firstName.value = "";
  firstName.placeholder = "";
  form.style.display = "none";
  user.style.display = "block";
  overlay.style.display = "none";
});

