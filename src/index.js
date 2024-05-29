import './index.css';

import { homePageLoading } from './home.js';
import { menuPageLoading } from './menu.js';
import { galeryPageLoading } from './galery.js';


const content = document.querySelector("#content");

window.addEventListener('load', () => {
    homePageLoading(content);
});

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const galeryButton = document.querySelector("#galery");

homeButton.addEventListener("click", function() {
    content.innerHTML = "";
    homePageLoading(content);
})

menuButton.addEventListener("click", function() {
    content.innerHTML = "";
    menuPageLoading(content);
})

galeryButton.addEventListener("click", function() {
    content.innerHTML = "";
    galeryPageLoading(content);
})