import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';
//import { createElement } from 'react';

function createNav(){
    const content = document.getElementById('content');
    const nav = document.createElement('nav')

    const homeBth = document.createElement('button');
    homeBth.textContent = 'Главная';
    homeBth.onclick = () => clearAndLoad(loadHome);


    const contactBth = document.createElement('button');
    contactBth.textContent = 'Kонтакты';
    contactBth.onclick = () => clearAndLoad(loadContact);

    const menuBth = document.createElement('button');
    menuBth.textContent = 'Меню';
    menuBth.onclick = () => clearAndLoad(loadMenu)

    nav.appendChild(homeBth);
    nav.appendChild(contactBth);
    nav.appendChild(menuBth);
    content.appendChild(nav);
}

function clearAndLoad(loadFunction){
    const content = document.getElementById('content');
    loadFunction();
}
function switchActive(clickedButton) {
    document.querySelector('nav button.active')?.classList.remove('active');
    clickedButton.classList.add('active');
}
createNav();
loadHome();