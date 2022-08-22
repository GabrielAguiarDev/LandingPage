// Btn no Media query - Menu
var btnMenu = document.querySelector(".bx-menu")
var navMenu = document.querySelector("nav > ul")

btnMenu.onclick = function() {
    navMenu.classList.toggle("active")
}

function ExibirForm(formExibir, formSumir) {
    document.getElementById(formExibir).style.animation = "exibirForm 0.5s ease-in-out";
    document.getElementById(formExibir).style.display = "block";
    document.getElementById(formSumir).style.display = "none"
}

// LOGIN
document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('password').type = 'text';
    document.getElementById('olho').style.color = "#585858";
});

document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('password').type = 'password';
    document.getElementById('olho').style.color = "#a09f9fa9";
});

document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('password').type = 'password';
    document.getElementById('olho').style.color = "#a09f9fa9";
});