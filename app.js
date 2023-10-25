const menuBar = document.getElementById("menu-bar");
const menuItems = document.getElementById("menu-items");
const menuLink = document.querySelectorAll(".menu-link");
const date = document.getElementById("date");
const success = document.getElementById("success");
const register = document.getElementById("register");
const submitBtn = document.querySelector(".submit-btn");
const backBtn = document.querySelector(".back-btn");
const input = document.querySelectorAll("input");
const checkBox = document.getElementById("term");
const select = document.querySelectorAll("select");

// Setup Date
date.innerHTML = new Date().getFullYear();
menuBar.addEventListener("click", () => {
  menuItems.classList.toggle("hidden");
});

menuLink.forEach((link) =>
  link.addEventListener("click", () => {
    menuItems.classList.add("hidden");
  })
);
function eraseInput() {
  input.forEach((inputField) => {
    inputField.value = "";
  });
  select.forEach((se) => {
    se.value = "0";
  });
  checkBox.checked = false;
}
// Register
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  success.classList.add("open-popUp");
  register.classList.add("hide");
});
backBtn.addEventListener("click", () => {
  success.classList.remove("open-popUp");
  register.classList.remove("hide");
  eraseInput();
});
