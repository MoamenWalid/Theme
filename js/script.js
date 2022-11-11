let buttons = Array.from(document.querySelectorAll("button"));
let photoProducts = Array.from(document.querySelectorAll(".grid-product .photo"));
let home = document.querySelector(".part-one li:first-child i");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "store.html";
  })
})

photoProducts.forEach((photo) => {
  photo.addEventListener("click", () => {
    window.location.href = "store.html";
  })
})

home.addEventListener("click", () => {
  window.location.href = "index.html";
})