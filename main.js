var hamburgerStatus = false;

function hamburgerClicked() {
    var menuVerticle = document.getElementById('menu-verticle');
    var hamburgerImg = document.getElementById('hamburger-img');
    if (hamburgerStatus == false) {
        menuVerticle.style.display = 'block';
        hamburgerImg.src = 'img/hamburger-x.png';
        hamburgerStatus = true;
    }
    else {
        menuVerticle.style.display = 'none';
        hamburgerImg.src = 'img/hamburger-full.png';
        hamburgerStatus = false;
    }
}



// var x = document.getElementById('btn1');
//                 alert(x);
window.onload = function () {
    var contactbtn = document.getElementById("to-contact-btn");

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            contactbtn.style.display = "block";
        } else {
            contactbtn.style.display = "none";
        }
    }
}

