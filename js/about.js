// Btn no Media query - Menu
var btnMenu = document.querySelector(".bx-menu")
var navMenu = document.querySelector("nav > ul")

btnMenu.onclick = function() {
    navMenu.classList.toggle("active")
}