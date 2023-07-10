//
const container = document.querySelector(".container");
let urlBuddies = "https://valorant-api.com/v1/buddies";
let numberOfItemGenerated = 50;
//

// Vas chercher les données des armes
function getDataFromValBuddies() {
  return new Promise((resolve, reject) => {
    fetch(urlBuddies)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function createBuddies() {
  getDataFromValBuddies()
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
        divImg.style.backgroundImage = "url(" + element.displayIcon + ")";
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
          createBuddies();
        };
        numberOfItemGenerated = numberOfItemGenerated + 50;
        section.appendChild(divShowMore);
      } else {
        numberOfItemGenerated = 50;
      }

      container.appendChild(section);
    })

    .catch((error) => {
      console.log("GetDataFromValBuddies est cassé");
    });
}

// Fonction qui reset la valeur de la variable d'item generer quand on clique à nouveau sur le menu Buddies, pour que seulement 50 items soit générer après avoir déjà visiter ce menu.
export function resetBuddiesVar() {
  numberOfItemGenerated = 50;
}
