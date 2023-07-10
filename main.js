// import { createSkins } from "./modules/createSkins.mjs";
import { smoothScroll } from "./modules/scrolling.mjs";
import { createGun } from "./modules/createGuns.mjs";
import { createMaps } from "./modules/createMaps.mjs";
import { createBuddies } from "./modules/createBuddies.mjs";
import { resetBuddiesVar } from "./modules/createBuddies.mjs";
import { createSprays } from "./modules/createSprays.mjs";
import { resetSpraysVar } from "./modules/createSprays.mjs";
import { createCards } from "./modules/createCards.mjs";
import { resetCardsVar } from "./modules/createCards.mjs";

//

function reload() {
  createGun();
}
smoothScroll();
createGun();

document.querySelector(".mainTitle").addEventListener("click", reload);
document.querySelector(".navbar-Weapons").addEventListener("click", createGun);
document.querySelector(".navbar-Maps").addEventListener("click", createMaps);

// event reset et create BUDDIES(50)
document
  .querySelector(".navbar-Buddies")
  .addEventListener("click", resetBuddiesVar);
document
  .querySelector(".navbar-Buddies")
  .addEventListener("click", createBuddies);

// event reset et create SPRAYS(50)
document
  .querySelector(".navbar-Sprays")
  .addEventListener("click", resetSpraysVar);
document
  .querySelector(".navbar-Sprays")
  .addEventListener("click", createSprays);

// event reset et create CARDS(25)
document
  .querySelector(".navbar-Cards")
  .addEventListener("click", resetCardsVar);
document.querySelector(".navbar-Cards").addEventListener("click", createCards);
