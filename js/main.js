// !--------------------------События клавиатуры---------------------------
// ? keydown:возникает при нажатии клавиши клавиатуры и длится, пока нажата клавиша
// window.addEventListener("keydown", (event) => {
//   console.log(event);
// });
// ? keyup:вощникает при отпускании клавиши клавиатуры
// window.addEventListener("keyup", (event) => {
//   console.log(event);
// });
// ? submit: обьединить формочку и событьи
let form = document.querySelector("form");
let inpForm = document.querySelectorAll("form input");
let btn1 = document.querySelector("#btn1");
let img = document.querySelector("form img");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  inpForm.forEach((elem) => {
    elem.value = "";
  });
});
btn1.addEventListener("click", () => {
  form.style.display = "block";
});
img.addEventListener("click", () => {
  form.style.display = "none";
});
