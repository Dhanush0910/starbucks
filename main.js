let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let home = document.querySelector('#home-menu');

menu.onclick = () => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menu.classList.remove('bx-x');
    } 
    else {
        navbar.classList.add('active');
        menu.classList.add('bx-x');
    }
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
home.onclick = () => {
    navbar.classList.remove('active');
    menu.classList.remove('bx-x');
}