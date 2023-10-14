const sideBar = document.querySelector(".side-bar");
const sideMenu = document.querySelector(".description");
const closeMenu = document.querySelector(".fa-xmark");
const closeMenuBar = document.querySelector(".side-menu");
sideMenu.addEventListener("click", function () {
  sideBar.style.right = "0px";
  sideBar.style.transition = "1.5s ease-out";
});

closeMenu.addEventListener("click", function () {
  sideBar.style.right = "-33rem";
  sideBar.style.transition = "1.5s ease-out";
});

closeMenuBar.addEventListener("click", function () {
  sideBar.style.right = "-33rem";
  sideBar.style.transition = "1.5s ease-out";
});
