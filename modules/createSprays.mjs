//
const container = document.querySelector(".container");
let urlSprays = "https://valorant-api.com/v1/sprays";
let numberOfItemGenerated = 50;
//

// Vas chercher les données des armes
function getDataFromValSprays() {
  return new Promise((resolve, reject) => {
    fetch(urlSprays)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function createSprays() {
  getDataFromValSprays()
    .then((data) => {
      container.innerHTML = "";
      let section = document.createElement("section");
      section.classList.add("section");

      for (let index = 0; index < numberOfItemGenerated; index++) {
        const element = data.data[index];

        let divCardMain = document.createElement("div");
        divCardMain.classList.add("card-main-buddies");

        let divTitle = document.createElement("div");
        divTitle.classList.add("card-title-buddies");
        divTitle.textContent = "" + element.displayName;

        let divImg = document.createElement("div");
        divImg.classList.add("card-img-buddies");
        divImg.style.backgroundImage =
          "url(" + element.fullTransparentIcon + ")";
        divImg.style.cursor = "pointer";
        divImg.id = element.uuid;
        // divImg.onclick = function () {
        //   createSkins(this.id);
        // };

        divCardMain.appendChild(divTitle);
        divCardMain.appendChild(divImg);
        section.appendChild(divCardMain);
      }
      if (numberOfItemGenerated < data.data.length - 50) {
        let divShowMore = document.createElement("div");
        divShowMore.classList.add("divShowMore");
        divShowMore.textContent = "Show more";
        divShowMore.id = numberOfItemGenerated;
        divShowMore.onclick = function () {
          createSprays();
        };
        numberOfItemGenerated = numberOfItemGenerated + 50;
        section.appendChild(divShowMore);
      } else {
        numberOfItemGenerated = 50;
      }

      container.appendChild(section);
    })

    .catch((error) => {
      console.log("GetDataFromValSprays est cassé");
    });
}
export function resetSpraysVar() {
  numberOfItemGenerated = 50;
}
