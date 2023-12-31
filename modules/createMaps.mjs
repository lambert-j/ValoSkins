import { createMapsCharts } from "./createMapsChart.mjs";

const container = document.querySelector(".container");
let urlMaps = "https://valorant-api.com/v1/maps";

// Vas chercher les données des armes
function getDataFromValMaps() {
  return new Promise((resolve, reject) => {
    fetch(urlMaps)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function createMaps() {
  getDataFromValMaps()
    .then((data) => {
      container.innerHTML = "";
      let section = document.createElement("section");
      section.classList.add("section");

      const noFilterArray = data.data;

      const array = noFilterArray.filter((item) => {
        const displayName = item.displayName;
        return (
          displayName !== "District" &&
          displayName !== "Kasbah" &&
          displayName !== "Piazza" &&
          displayName !== "The Range"
        );
      });

      console.log(array);
      array.sort((a, b) => {
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

      for (let index = 0; index < array.length; index++) {
        const element = array[index];

        let divCardMain = document.createElement("div");
        divCardMain.classList.add("card-main-map");

        let divTitle = document.createElement("div");
        divTitle.classList.add("card-title-map");
        divTitle.textContent = "" + element.displayName;

        let divImg = document.createElement("div");
        divImg.classList.add("card-img-map");
        divImg.style.backgroundImage = "url(" + element.splash + ")";
        divImg.style.cursor = "pointer";
        divImg.id = element.uuid;
        divImg.onclick = function () {
          createMapsCharts(this.id);
        };

        divCardMain.appendChild(divTitle);
        divCardMain.appendChild(divImg);
        section.appendChild(divCardMain);
      }

      container.appendChild(section);
    })

    .catch((error) => {
      console.log("GetDataFromVal est cassé");
    });
}
