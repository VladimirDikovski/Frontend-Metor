const radioBtn1el = document.getElementById("theme-btn-1");
const radioBtn2el = document.getElementById("theme-btn-2");
const radioBtn3el = document.getElementById("theme-btn-3");
const bodyEl = document.querySelector("body");

radioBtn1el.addEventListener("change", function () {
  if (radioBtn1el.checked) {
    bodyEl.classList.remove("theme-2");
    bodyEl.classList.remove("theme-3");
  }
});

radioBtn2el.addEventListener("change", function () {
  if (radioBtn2el.checked) {
    bodyEl.classList.add("theme-2");
    bodyEl.classList.remove("theme-1");
    bodyEl.classList.remove("theme-3");
  }
});

radioBtn3el.addEventListener("change", function () {
  if (radioBtn3el.checked) {
    bodyEl.classList.add("theme-3");
    bodyEl.classList.remove("theme-1");
    bodyEl.classList.remove("theme-2");
  }
});
