
// getting the Dom elements
const menuToggle = document.querySelector('.menu-toggle'); // hamburger-menu
const toggleBody = document.querySelector('.toggle-body'); // menu-bar
const toggleIcon = document.querySelector('.toggler'); // central-hamburger-line

// toggling the class name for css animation
const toggle = () => {
    toggleBody.classList.toggle('display-none');
    toggleIcon.classList.toggle('rotate');
}

menuToggle.addEventListener('click', toggle);
