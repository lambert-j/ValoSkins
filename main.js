import { getDataFromVal } from "./modules/fetch.mjs";
import { smoothScroll } from "./modules/scrolling.mjs";
//VARIABLES

const section = document.querySelector(".sectionArme");
const sectionSkins = document.querySelector(".sectionSkins");
let urlSkins = "https://valorant-api.com/v1/weapons/";

//EVENEMENT

//FONCTION CREER MENU PRINCIPAL

getDataFromVal()
  .then((data) => {
    section.innerHTML = "";
    sectionSkins.innerHTML = "";
    for (let index = 0; index < data.data.length; index++) {
      const element = data.data[index];

      let divSection = document.createElement("div");
      divSection.classList.add("card-main");

      let divTitle = document.createElement("div");
      divTitle.classList.add("card-title");
      divTitle.textContent = "" + element.displayName;

      let divImg = document.createElement("div");
      divImg.classList.add("card-img");
      divImg.style.backgroundImage = "url(" + element.displayIcon + ")";

      let divLinks = document.createElement("div");
      divLinks.classList.add("card-links");

      let divLink1 = document.createElement("div");
      divLink1.classList.add("card-link");
      divLink1.textContent = "Stats";

      let divLink2 = document.createElement("div");
      divLink2.classList.add("card-link");
      divLink2.textContent = "Skins";
      divLink2.id = element.uuid;
      divLink2.onclick = function () {
        getDataFromValSkins(this.id);
      };

      divLinks.appendChild(divLink1);
      divLinks.appendChild(divLink2);
      divSection.appendChild(divTitle);
      divSection.appendChild(divImg);
      divSection.appendChild(divLinks);
      section.appendChild(divSection);
    }
  })
  .catch((error) => {
    console.log("GetDataFromVal est cassé");
  });

// FONCTION CREER MENU SKINS AU CLICK SUR ARME

function getDataFromValSkins(id) {
  return new Promise((resolve, reject) => {
    fetch(urlSkins + id)
      .then((response) => response.json())
      .then((data) => {
        section.innerHTML = "";
        sectionSkins.innerHTML = "";

        for (let index = 0; index < data.data.skins.length; index++) {
          const element = data.data.skins[index];

          if (element.displayIcon === null) {
            console.log(element.displayName + " n'existe pas");
          } else {
            let divSection = document.createElement("div");
            divSection.classList.add("card-main");

            let divTitle = document.createElement("div");
            divTitle.classList.add("card-title");
            divTitle.textContent = "" + element.displayName;

            let divImg = document.createElement("div");
            divImg.classList.add("card-img");
            divImg.style.backgroundImage = "url(" + element.displayIcon + ")";

            let divChroma = document.createElement("div");
            divChroma.classList.add("chroma");
            divChroma.textContent = "Colors : " + element.chromas.length;

            divSection.appendChild(divTitle);
            divSection.appendChild(divImg);
            divSection.appendChild(divChroma);
            section.appendChild(divSection);
          }
        }

        resolve(data.data.skins);
        console.log(data.data.skins);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function reload() {
  location.reload();
}
document.querySelector(".nav").addEventListener("click", reload);

smoothScroll();
