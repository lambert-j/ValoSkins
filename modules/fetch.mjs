let urlWeapon = "https://valorant-api.com/v1/weapons";
let urlSkins = "https://valorant-api.com/v1/weapons/";

export function getDataFromVal() {
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
