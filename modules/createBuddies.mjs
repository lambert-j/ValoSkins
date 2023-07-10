//
const container = document.querySelector(".container");
let urlBuddies = "https://valorant-api.com/v1/buddies";
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

      for (let index = 0; index < data.data.length; index++) {
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

      container.appendChild(section);
    })

    .catch((error) => {
      console.log("GetDataFromValBuddies est cassé");
    });
}
