import { createChromas } from "./createChromas.mjs";

let urlSkins = "https://valorant-api.com/v1/weapons/";
const container = document.querySelector(".container");

// Vas chercher les données des armes + id skins
function getDataFromValSkins(id) {
  return new Promise((resolve, reject) => {
    fetch(urlSkins + id)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })

      .catch((error) => {
        reject(error);
      });
  });
}

export function createSkins(id) {
  getDataFromValSkins(id)
    .then((data) => {
      container.innerHTML = "";
      let section = document.createElement("section");
      section.classList.add("section");

      for (let index = 0; index < data.data.skins.length; index++) {
        const element = data.data.skins[index];

        // Vérifie s'il y a une image ICON de disponible sinon ne génère pas la card
        if (element.displayIcon === null) {
          console.log(element.displayName + " n'existe pas");
        } else {
          let divCardMain = document.createElement("div");
          divCardMain.classList.add("card-main");

          let divTitle = document.createElement("div");
          divTitle.classList.add("card-title");
          divTitle.textContent = "" + element.displayName;

          let divImg = document.createElement("div");
          divImg.classList.add("card-img");
          divImg.style.backgroundImage = "url(" + element.displayIcon + ")";
          divImg.id = element.uuid;
          divImg.onclick = function () {
            createChromas(this.id);
          };

          let divChroma = document.createElement("div");
          divChroma.classList.add("chroma");
          divChroma.textContent = "Colors : " + element.chromas.length;

          divCardMain.appendChild(divTitle);
          divCardMain.appendChild(divImg);
          divCardMain.appendChild(divChroma);
          section.appendChild(divCardMain);
        }
        container.appendChild(section);
      }
    })
    .catch((error) => {
      console.log("createSkins est cassé");
    });
}
