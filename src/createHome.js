const container = document.querySelector('#content');
const bannerContainer = document.createElement("div");
const title = document.createElement("h1");
const descriptionContainer = document.createElement("div");
const description = document.createElement("p");

bannerContainer.classList.add("banner-container");
title.classList.add("title");
title.textContent = "The Leaky Cauldron";
bannerContainer.appendChild(title);
container.appendChild(bannerContainer);

descriptionContainer.classList.add("description-container");
description.textContent = "Step into The Leaky Cauldron, a magical hub brimming with charm, mystery, and the finest wizarding fare! Nestled between the bustling streets of Muggle London and the enchanting Diagon Alley, our historic pub has been serving witches, wizards, and the occasional adventurous Muggle since 1500. Whether you're craving a butterbeer, hearty stew, or a quiet nook to exchange tales of adventure, The Leaky Cauldron is your gateway to unforgettable moments. Magic is always on the menu!"
description.classList.add("description");
descriptionContainer.appendChild(description);
container.appendChild(descriptionContainer);