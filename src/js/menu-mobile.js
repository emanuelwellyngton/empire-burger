const btnMenu = document.querySelector("#menu_icon");
const nav = document.querySelector("#menu");

btnMenu.addEventListener('click', () => {
    nav.classList.toggle("active");
})