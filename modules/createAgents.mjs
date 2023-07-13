import { createAgentMenu } from "./CreateAgentMenu.mjs";

const container = document.querySelector(".container");
let urlWeapon = "https://valorant-api.com/v1/agents";

// Vas chercher les données des armes
function getDataFromValAgents() {
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
export function createAgents() {
  getDataFromValAgents()
    .then((data) => {
      container.innerHTML = "";
      let section = document.createElement("section");
      section.classList.add("section");
      const arrayAgent = data.data;

      arrayAgent.sort((a, b) => {
        const displayNameA = a.displayName.toLowerCase();
        const displayNameB = b.displayName.toLowerCase();
        if (displayNameA < displayNameB) {
          return -1;
        } else if (displayNameA > displayNameB) {
          return 1;
        } else {
          return 0;
        }
      });

      for (let index = 0; index < data.data.length; index++) {
        const element = data.data[index];

        if (element.isPlayableCharacter === false) {
          console.log("fake sova thrown away");
        } else {
          let divCardMain = document.createElement("div");
          divCardMain.classList.add("card-main-agents");

          let divTitle = document.createElement("div");
          divTitle.classList.add("card-title-agents");
          divTitle.textContent = "" + element.displayName;

          let divImg = document.createElement("div");
          divImg.classList.add("card-img-agents");
          divImg.style.backgroundImage = "url(" + element.fullPortrait + ")";
          divImg.style.cursor = "pointer";
          divImg.id = element.uuid;
          divImg.onclick = function () {
            createAgentMenu(this.id);
          };

          divCardMain.appendChild(divTitle);
          divCardMain.appendChild(divImg);
          section.appendChild(divCardMain);
        }
      }
      container.appendChild(section);
    })
    .catch((error) => {
      console.log("GetDataFromVal est cassé");
    });
}
