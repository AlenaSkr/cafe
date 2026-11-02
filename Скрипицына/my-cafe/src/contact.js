export function loadContact(){
    const content = document.getElementById('content'); 
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-page');

    const title = document.createElement('h1');
    title.textContent = 'Наши контакты';
    contactContainer.appendChild(title);

    const infoBlock = document.createElement('div');
    infoBlock.classList.add('contact-info');
    infoBlock.innerHTML = `
        <p><strong>Адрес:</strong> г. Орехово-Зуево, ул Ленина 59</p>
        <p><strong>Телефон:</strong> 8(999)999-99-99</p>
        <p><strong>Часы работы:</strong> Пн-пт с 10 до 21</p>
        <p><strong>Соц сети:</strong> <a href="#" target="_blank">Телеграм</a></p>
    `;
    contactContainer.appendChild(infoBlock);
    
    const bookBtn = document.createElement('button');
    bookBtn.textContent = 'Забронировать столик';
     bookBtn.onclick = () => {
        alert('Столик забронирован!');
    };

    contactContainer.appendChild(bookBtn);
    content.appendChild(contactContainer); 
}
