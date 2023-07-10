// import { createSkins } from "./modules/createSkins.mjs";
import { smoothScroll } from "./modules/scrolling.mjs";
import { createGun } from "./modules/createGuns.mjs";
import { createMaps } from "./modules/createMaps.mjs";
import { createBuddies } from "./modules/createBuddies.mjs";
import { createSprays } from "./modules/createSprays.mjs";

function reload() {
  createGun();
}
smoothScroll();
createGun();

document.querySelector(".mainTitle").addEventListener("click", reload);
document.querySelector(".navbar-Weapons").addEventListener("click", createGun);
document.querySelector(".navbar-Maps").addEventListener("click", createMaps);
document
  .querySelector(".navbar-Buddies")
  .addEventListener("click", createBuddies);
document
  .querySelector(".navbar-Sprays")
  .addEventListener("click", createSprays);
