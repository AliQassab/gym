const open = document.querySelectorAll(".open");
const close = document.querySelectorAll(".close");
const infoText = document.querySelectorAll(".info-text");
const infoTitle = document.querySelectorAll(".info-title");
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
  });
});
close.forEach((e, i) => {
  e.addEventListener("click", () => {
    e.classList.add("active-section");
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
  });
});
