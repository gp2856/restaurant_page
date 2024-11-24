import logoImage from './assets/logo.webp';
import exterior from './assets/exterior.webp';
import interior from './assets/interior.webp';

export const Home = (function () {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const homeContents = document.createElement('div');
    homeContents.classList.add('homeContents');
    content.appendChild(homeContents);

    let logo = document.createElement('img');
    logo.src = logoImage;
    logo.classList.add('logoImage');
    homeContents.appendChild(logo);

    let welcomeMessage = document.createElement('div');
    welcomeMessage.innerHTML = `<h3 class='p1'>Welcome to the Wandering Cauldron!</h3>
    Step into The Wandering Cauldron, a magical hub brimming with charm,
     mystery, and the finest wizarding fare!
      Nestled between the bustling streets of Muggle London and the
       enchanting Diagon Alley, our historic pub has been serving
        witches, wizards, and the occasional adventurous Muggle since
         1500. Whether you're craving a butterbeer, hearty stew, or a
          quiet nook to exchange tales of adventure, The Wandering Cauldron
           is your gateway to unforgettable moments. Magic is always on
            the menu!`;
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('imageDiv');
    welcomeMessage.appendChild(imageDiv);

    const exteriorImage = document.createElement('img');
    exteriorImage.src = exterior;
    exteriorImage.classList.add('dish-image');
    imageDiv.appendChild(exteriorImage);

    const interiorImage = document.createElement('img');
    interiorImage.src = interior;
    interiorImage.classList.add('dish-image');
    imageDiv.appendChild(interiorImage);

    welcomeMessage.classList.add('welcome-message', 'home-items');
    homeContents.appendChild(welcomeMessage);

    let hours = document.createElement('div');
    hours.innerHTML = `
    <h3 class='p1'>Hours of Operation:</h3>
    Open Daily:<br/>
    <ul>
        <li> Monday to Thursday: 11:00 AM - 10:00 PM </li>
        <li> Friday to Saturday: 11:00 AM - 12:00 AM </li>
        <li> Sunday: 12:00 PM - 9:00 PM </li>
    </ul>
    <em>Experience the magic from lunch to late night!</em>`
    hours.classList.add('hours', 'home-items');
    homeContents.append(hours);

    let location = document.createElement('div');
    location.innerHTML = `
    <h3>Find us at:</h3>
    The Wandering Cauldron<br/>
    221 Enchanted Alley, Hogsmeade Village<br/><br/>
    <em>Nesteled in the heart of Hogsmeade, just a broomstick's ride from Hogwarts Express Station!</em>`
    location.classList.add('location', 'home-items');
    homeContents.append(location);

    const footerSpacer = document.createElement('div');
    footerSpacer.classList.add('footer-spacer');
    content.appendChild(footerSpacer);
})