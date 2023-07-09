let urlChroma = "https://valorant-api.com/v1/weapons/skins/";
const container = document.querySelector(".container");

// Vas chercher les données des skins + id chroma
function getDataFromValChroma(id) {
  return new Promise((resolve, reject) => {
    fetch(urlChroma + id)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })

      .catch((error) => {
        reject(error);
      });
  });
}

// Utilise les données pour créer les cards chromas et attache lien des vidéo
export function createChromas(id) {
  getDataFromValChroma(id)
    .then((data) => {
      container.innerHTML = "";
      let section = document.createElement("section");
      section.classList.add("section");
      console.log(data);
      for (let index = 0; index < data.data.chromas.length; index++) {
        const element = data.data.chromas[index];

        // Vérifie s'il y a une image ICON de disponible sinon utilise FULLRENDER
        if (element.displayIcon === null) {
          let divCardMain = document.createElement("div");
          divCardMain.classList.add("card-main-chroma");

          let divTitle = document.createElement("div");
          divTitle.classList.add("card-title-chroma");
          divTitle.textContent = "" + element.displayName;

          let divImg = document.createElement("div");
          divImg.classList.add("card-img-chroma");
          divImg.style.backgroundImage = "url(" + element.fullRender + ")";

          // Vérifie s'il y a une vidéo de disponible
          let divChroma = document.createElement("a");
          if (element.streamedVideo === null) {
            console.log(element.displayName + " n'a pas de vidéo");
          } else {
            divChroma.classList.add("chroma-chroma");
            divChroma.textContent = "Video";
            divChroma.href = element.streamedVideo;
            divChroma.target = "blank";
          }

          divCardMain.appendChild(divTitle);
          divCardMain.appendChild(divImg);
          divCardMain.appendChild(divChroma);
          section.appendChild(divCardMain);
        } else {
          let divCardMain = document.createElement("div");
          divCardMain.classList.add("card-main-chroma");

          let divTitle = document.createElement("div");
          divTitle.classList.add("card-title-chroma");
          divTitle.textContent = "" + element.displayName;

          let divImg = document.createElement("div");
          divImg.classList.add("card-img-chroma");
          divImg.style.backgroundImage = "url(" + element.displayIcon + ")";

          let divChroma = document.createElement("a");

          // Vérifie s'il y a une vidéo de disponible
          if (element.streamedVideo === null) {
            console.log(element.displayName + " n'a pas de vidéo");
          } else {
            divChroma.classList.add("chroma-chroma");
            divChroma.textContent = "Video";
            divChroma.href = element.streamedVideo;
            divChroma.target = "blank";
          }

          divCardMain.appendChild(divTitle);
          divCardMain.appendChild(divImg);
          divCardMain.appendChild(divChroma);
          section.appendChild(divCardMain);
        }
        container.appendChild(section);
      }
    })
    .catch((error) => {
      console.log("createChromas est cassé");
    });
}
