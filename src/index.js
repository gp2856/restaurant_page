import './styles/styles.css';
import { Home } from './home.js';
import { Menu } from './menu.js';
import { Contact } from './contact.js';

const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', Home);
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', Menu);
const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', Contact);
Home();

const navInfo = document.querySelector('.nav-info');
const messages = [
    "Indulge in culinary enchantments at The Leaky Cauldron - 123 Diagon Alley | Open until midnight, come experience the magic!",
    "A magical meal awaits you at The Leaky Cauldron - 123 Diagon Alley | Reservations available for witches, wizards, and the occasional Muggle!",
    "Step into the wonder of wizarding cuisine - The Leaky Cauldron, 123 Diagon Alley | Serving spells and stews until midnight!",
    "The Leaky Cauldron - your gateway to a magical feast, 123 Diagon Alley | Enchanted dining, open daily until the bewitching hour!"
];

let messageIndex = 0;

const changeMessage = () => {
    navInfo.classList.add('hidden');
    setTimeout(() => {
        navInfo.textContent = messages[messageIndex];
        navInfo.classList.remove('hidden');
        messageIndex = (messageIndex + 1) % messages.length;
    }, 500)
};

setInterval(changeMessage, 5000);