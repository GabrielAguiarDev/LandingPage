// Btn no Media query - Menu
var btnMenu = document.querySelector(".bx-menu")
var navMenu = document.querySelector("nav > ul")

btnMenu.onclick = function() {
    navMenu.classList.toggle("active")
}

// REGISTER
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



if (window.matchMedia('screen and (max-width: 560px)').matches){
    // Alert - media query
    setTimeout(function() {
        $('#aviso').addClass('hidden');
        $('.bx-error').addClass('alertIcon');
    }, 0);
    // Text Animation - media query
    setTimeout(function() {
        $('#textH1').css("border-right", "none");
    },2700);

    setTimeout(function() {
        $('#textP1').addClass("textDigite")
        $('#textP1').css("visibility", "visible")
    }, 2900);

    setTimeout(function() {
        $('#textP1').css("border-right", "none");
    }, 5900);

    setTimeout(function() {
        $('#textP2').addClass("textDigite")
        $('#textP2').css("visibility", "visible")
    }, 6000);

    setTimeout(function() {
        $('#textP2').css("border-right", "none");
    }, 8000);
} else {
    // Alert
    setTimeout(function() {
        $('#aviso').addClass('hidden');
        $('.bx-error').addClass('alertIcon');
    }, 7000);
    // Text Animation
    setTimeout(function() {
        $('#textH1').css("border-right", "none");
    },6100);

    setTimeout(function() {
        $('#textP1').addClass("textDigite")
        $('#textP1').css("visibility", "visible")
    }, 6000);

    setTimeout(function() {
        $('#textP1').css("border-right", "none");
    }, 9900);

    setTimeout(function() {
        $('#textP2').addClass("textDigite")
        $('#textP2').css("visibility", "visible")
    }, 9900);

    setTimeout(function() {
        $('#textP2').css("border-right", "none");
    }, 12500);
}