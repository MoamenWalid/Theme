let minusIcon = document.querySelector(".minus");
let plusIcon = document.querySelector(".plus");
let iconSpan = document.querySelector(".how-want span");

minusIcon.addEventListener("click", () => {
  if (iconSpan.innerHTML == 0) {
    return false;
  }
  else {
    iconSpan.innerHTML--;
  }
})

plusIcon.addEventListener("click", () => {
  iconSpan.innerHTML++;
})