import { createSkins } from "./createSkins.mjs";
const container = document.querySelector(".container");
let urlWeapon = "https://valorant-api.com/v1/weapons";

// Vas chercher les données des armes
function getDataFromVal() {
  return new Promise((resolve, reject) => {
    fetch(urlWeapon)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Utilise les données pour créer les cards armes et attache lien des skins
export function createGun() {
  getDataFromVal()
    .then((data) => {
      container.innerHTML = "";
      let section = document.createElement("section");
      section.classList.add("section");
      for (let index = 0; index < data.data.length; index++) {
        const element = data.data[index];

        let divCardMain = document.createElement("div");
        divCardMain.classList.add("card-main");

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
          createSkins(this.id);
        };

        divLinks.appendChild(divLink1);
        divLinks.appendChild(divLink2);
        divCardMain.appendChild(divTitle);
        divCardMain.appendChild(divImg);
        divCardMain.appendChild(divLinks);
        section.appendChild(divCardMain);
      }
      container.appendChild(section);
    })
    .catch((error) => {
      console.log("GetDataFromVal est cassé");
    });
}
