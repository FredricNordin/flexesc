const menuBtn = document.querySelector('#hamburger');

// Render background & menu for mobile
menuBtn.addEventListener("click", () => {
    const menuBackground = document.createElement('div');
    menuBackground.className = 'menu-background';
    document.body.appendChild(menuBackground);

    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    document.body.appendChild(mobileMenu);
    mobileMenu.innerHTML = `
        <ul>
            <img id="closeHamburger" src="img/close.png" alt="close mobile menu">
            <li><a href="#playonline">Play online</a></li>
            <li><a href="#playonsite">Play on-site</a></li>
            <li><a href="#thestory">The story</a></li>
            <li><a href="#contactus">Contact us</a></li>
        </ul>
    `;

    // Removes the mobile menu and background
    if(document.querySelector('#closeHamburger')){
        const closeMenuBtn = document.querySelector('#closeHamburger');
        closeMenuBtn.addEventListener("click", () => {
            mobileMenu.remove()
            menuBackground.remove()
        })
    }
})