import './index.css';

import { homePageLoading } from './home.js';


const content = document.querySelector("#content");

window.addEventListener('load', () => {
    homePageLoading(content);
});

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactsButton = document.querySelector("#contacts");

homeButton.addEventListener("click", function() {
    homePageLoading(content);
})

menuButton.addEventListener("click", function() {
    content.innerHTML = "";
})

contactsButton.addEventListener("click", function() {
    content.innerHTML = "";
})