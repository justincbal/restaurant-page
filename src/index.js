import './styles/main.scss'
import { navBar } from './nav'
import { home } from './home'
import { menu } from './menu';
import { about } from './about';
const content = document.querySelector('#content');

firstLoad();
//navBar();
// test

//menu();

// First load
// init();

// function init() {
//     navBar();
// }

// Nav events
function navEvents() {
    const logo = document.querySelector('.logo');
    const homeLink = document.querySelector('.homeLink');
    const menuLink = document.querySelector('.menuLink');
    const aboutLink = document.querySelector('.aboutLink');

    logo.addEventListener('click', () => {
        content.removeChild(content.lastChild)
        home();
    })

    homeLink.addEventListener('click', () => {
        content.removeChild(content.lastChild)
        home();
    })

    menuLink.addEventListener('click', () => {
        content.removeChild(content.lastChild)
        menu();
    })

    aboutLink.addEventListener('click', () => {
        content.removeChild(content.lastChild)
        about();
    })



}


// first load
function firstLoad() {
    navBar();
    home();
    navEvents();
}
