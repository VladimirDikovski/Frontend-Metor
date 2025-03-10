const featuresEl = document.querySelector(".features");
const complanyEl = document.querySelector(".company");
const featereIcon = document.querySelector(".icon-features");
const complanyIcon = document.querySelector(".icon-company");
const todoEl = document.querySelector(".todo-list");
const todoEl2 = document.querySelector(".todo-list-2");
const bodyEl = document.querySelector("body");
const menuEl = document.querySelector(".open-menu");
const bodyDropDownEl = document.querySelector(".drop-down-icon");
const headerEl = document.querySelector(".header");

complanyEl.addEventListener("mouseover", function () {
  todoEl2.style.display = "flex";
  complanyIcon.src = "images/icon-arrow-up.svg";
});

featuresEl.addEventListener("mouseover", function () {
  todoEl.style.display = "flex";
  featereIcon.src = "images/icon-arrow-up.svg";
});

bodyEl.addEventListener("click", function () {
  todoEl.style.display = "none";
  featereIcon.src = "images/icon-arrow-down.svg";
  todoEl2.style.display = "none";
  complanyIcon.src = "images/icon-arrow-down.svg";
});

bodyDropDownEl.addEventListener("click", function () {
  headerEl.classList.toggle("drop-down");

  if (headerEl.classList.contains("drop-down")) {
    bodyDropDownEl.src = "images/icon-close-menu.svg";
  } else {
    bodyDropDownEl.src = "images/icon-menu.svg";
  }
});
