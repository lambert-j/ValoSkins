//
const container = document.querySelector(".container");
let urlcards = "https://valorant-api.com/v1/playercards";
let numberOfItemGenerated = 25;
//

// Vas chercher les données des armes
function getDataFromValCards() {
  return new Promise((resolve, reject) => {
    fetch(urlcards)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function createCards() {
  getDataFromValCards()
    .then((data) => {
      container.innerHTML = "";
      let section = document.createElement("section");
      section.classList.add("section");

      for (let index = 0; index < numberOfItemGenerated; index++) {
        const element = data.data[index];

        let divCardMain = document.createElement("div");
        divCardMain.classList.add("card-main-cards");

        let divTitle = document.createElement("div");
        divTitle.classList.add("card-title-cards");
        divTitle.textContent = "" + element.displayName;

        let divImg = document.createElement("div");
        divImg.classList.add("card-img-cards");
        divImg.style.backgroundImage = "url(" + element.largeArt + ")";
        divImg.style.cursor = "pointer";
        divImg.id = element.uuid;
        // divImg.onclick = function () {
        //   createSkins(this.id);
        // };

        divCardMain.appendChild(divTitle);
        divCardMain.appendChild(divImg);

        section.appendChild(divCardMain);
      }
      if (numberOfItemGenerated < data.data.length - 25) {
        let divShowMore = document.createElement("div");
        divShowMore.classList.add("divShowMore");
        divShowMore.textContent = "Show more";
        divShowMore.id = numberOfItemGenerated;
        divShowMore.onclick = function () {
          createCards();
        };
        numberOfItemGenerated = numberOfItemGenerated + 25;
        section.appendChild(divShowMore);
      } else {
        numberOfItemGenerated = 25;
      }
      container.appendChild(section);
    })

    .catch((error) => {
      console.log("GetDataFromValcards est cassé");
    });
}

// Fonction qui reset la valeur de la variable d'item generer quand on clique à nouveau sur le menu cards, pour que seulement 50 items soit générer après avoir déjà visiter ce menu.
export function resetCardsVar() {
  numberOfItemGenerated = 25;
}
