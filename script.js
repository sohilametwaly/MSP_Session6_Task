const menu_bar = document.querySelector(".menu-bar-icon");
const menu_items = document.querySelector(".menu-bar-items");
const exit_btn = document.querySelector(".exit-btn");

menu_bar.addEventListener("click", (event) => {
  menu_items.classList.add("change");
});

exit_btn.addEventListener("click", (event) => {
  menu_items.classList.remove("change");
});
