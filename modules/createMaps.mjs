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
  getDataFromValMaps().then((data) => {
    console.log(data);
  });
}
