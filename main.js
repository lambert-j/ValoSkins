// import { createSkins } from "./modules/createSkins.mjs";
import { smoothScroll } from "./modules/scrolling.mjs";
import { createGun } from "./modules/createGuns.mjs";
import { createMaps } from "./modules/createMaps.mjs";

function reload() {
  createGun();
}
smoothScroll();
createGun();

document.querySelector(".mainTitle").addEventListener("click", reload);
document.querySelector(".navbar-Weapons").addEventListener("click", createGun);
document.querySelector(".navbar-Maps").addEventListener("click", createMaps);
