import menuData from './menu-data.json';

import croissantImg from './images/cruasan.jpg';
import tiramisuImg from './images/tiram.jpg';
import cheesecakeImg from './images/chizkeyk.jpg';


const images = {
    "cruasan.jpg": croissantImg,
    "tiram.jpg": tiramisuImg,
    "chizkeyk.jpg": cheesecakeImg
};

export function loadMenu() {
    const content = document.getElementById('content');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-page');

    const title = document.createElement('h1');
    title.textContent = 'Наше Меню';
    menuContainer.appendChild(title);

    menuData.forEach(item => {
        const dishCard = document.createElement('div');
        dishCard.classList.add('dish-card');

        const imgPath = images[item.image];


        dishCard.innerHTML = `
            <img class="dish-image" src="${imgPath}" alt="${item.name}">
            <div>
                <h3>${item.name} — ${item.price} руб.</h3>
                <p>${item.description}</p>
            </div>
        `;

        menuContainer.appendChild(dishCard);
    });
    
    content.appendChild(menuContainer);
}
