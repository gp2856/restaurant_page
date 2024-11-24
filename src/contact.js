import contactImage from './assets/contact.webp';

export const Contact = (function () {

    const content = document.getElementById('content');
    content.innerHTML = '';

    const contact = document.createElement('img');
    contact.src = contactImage;
    contact.classList.add('contact-image');
    content.appendChild(contact);

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = 'Contact Us';
    content.appendChild(contactInfo);

    const phoneNumber = document.createElement('div');
    phoneNumber.classList.add('contact');
    phoneNumber.innerHTML = `
    <h3 class='p1'>Phone Number:</h3>
    While we'd love for you to send an owl, we understand Muggle communication has its perks too! Give us a call at the number below—no need to train your owl for long-distance.
    (323) 555-6423`;
    contactInfo.appendChild(phoneNumber);

    const email = document.createElement('div');
    email.classList.add('contact');
    email.innerHTML = `
    <h3 class='p1'>Email:</h3>
    inquiries@leakycauldron.co.wz`;
    contactInfo.appendChild(email);
});