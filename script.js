let menuOpen = false

function mobileMenu() {
    if (menuOpen === false) {
        document.querySelector('.mobile-menu').style.display = "block";
        menuOpen = true;
    } else if (menuOpen === true) {
        document.querySelector('.mobile-menu').style.display = "none";
        menuOpen = false;
    }
}