import pixiedustImage from './assets/pixiedust.webp';
import wizardwingsImage from './assets/wizardwings.webp';
import cauldronstewImage from './assets/cauldronstew.webp';
import dragonfireroastImage from './assets/dragonfireroast.webp';
import goblingoldpieImage from './assets/goblingoldpie.webp';
import mooncakeImage from './assets/mooncake.webp';
import pixiepunchImage from './assets/pixiepunch.webp';
import butterbrewImage from './assets/butterbrew.webp';

export const Menu = (function () {
    const items = [
        { "name": "Pixie Dust Bites", "description": "Crispy golden nuggets infused with sparkling pixie dust, served with a glowing dip", "firstOfThisType": "starters", "price": "6 Galleons", "image": pixiedustImage },
        { "name": "Wizard Wings", "description": "Tender chicken wings enchanted with smoky spices and served with dragon fire sauce", "price": "8 Galleons", "image": wizardwingsImage },
        { "name": "Cauldron Stew", "description": "A hearty mix of enchanted vegetables and tender beef, simmered in a magical broth", "firstOfThisType": "courses", "price": "10 Galleons", "image": cauldronstewImage },
        { "name": "Dragonfire Roast", "description": "Juicy roast chicken seasoned with fiery spices, served with a side of charred vegetables", "price": "12 Galleons", "image": dragonfireroastImage },
        { "name": "Goblin Gold Pie", "description": "Rich flaky crust filled with golden honey and enchanted spices", "firstOfThisType": "dessert", "price:": "8 Galleons", "image": goblingoldpieImage },
        { "name": "Enchanted Mooncake", "description": "Soft pastries with glowing fillings that change flavors under candelight", "price": "7 Galleons", "image": mooncakeImage },
        { "name": "Pixie Punch", "description": "A sparkling fruity beverage with a dash of glittering magic.", "firstOfThisType": "drinks", "price": "5 Galleons", "image": pixiepunchImage },
        { "name": "Butterbrew", "description": "A frothy, creamy brew with hints of butterscotch and caramel, served warm.", "price": "6 Galleons", "image": butterbrewImage }
    ];

    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    menuHeader.innerHTML = "MENU";
    content.appendChild(menuHeader);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);

    const displayInfo = document.createElement('div');
    displayInfo.classList.add('display-info');
    displayInfo.innerHTML = `
    <img src='${items[0].image}' alt='' class='dish-image'>
    <p class='menu-span'>${items[0].description}</p>`;
    menu.appendChild(displayInfo);

    const changeDisplay = (dish, dishImage, element) => {
        displayInfo.innerHTML = `
        <img src='${dishImage}' alt='${dish}' class='dish-image'>
        <p class='menu-span'>${dish}</p>
    `;
        document.querySelectorAll('.p1').forEach(dish => dish.classList.remove('selected'));
        element.classList.add('selected');
    };

    const menuList = document.createElement('div');
    menuList.classList.add('menu-list');

    items.forEach((item) => {
        const dishElement = document.createElement('p');
        dishElement.classList.add('p1');
        dishElement.innerHTML = `${item.name}<span class='price-span'>${item.price}</span>`;
        if (item.firstOfThisType) {
            const firstOfThisType = document.createElement('p');
            firstOfThisType.classList.add('p0');
            firstOfThisType.innerHTML = item.firstOfThisType;
            menuList.appendChild(firstOfThisType);
        }
        dishElement.addEventListener('click', () => changeDisplay(item.description, item.image, dishElement));
        menuList.appendChild(dishElement);
    });

    menu.appendChild(menuList);
});