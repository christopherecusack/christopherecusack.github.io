import { $ } from './dom.js';
import { init } from './audio.js';
import * as Contact from './contact.js'

const sections = $('section');
const links = $('header nav a');
const menuIcon = $('#menu-icon');
const navBar = $('.navbar');
const copyyear = $('#year');
const years = $('#years');
const header = $('header');
const footer = $('footer');

init();
Contact.init();

copyyear.innerText = new Date().getFullYear();
years.innerText = new Date().getFullYear() - 2002;

menuIcon.onclick = () => {
    removeMenu();
}

links.forEach(link => {
    link.onclick = () => {
        removeMenu();
    }
});

function removeMenu() {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

window.onscroll = function () {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
                $(`header nav a[href*=${id}]`).classList.add('active');
            });

            section.classList.add('show-animate');
        } else {
            section.classList.remove('show-animate');
        }
    });

    header.classList.toggle('sticky', window.scrollY > 100);
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}