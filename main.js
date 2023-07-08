import { GetDataFromVal } from "./modules/fetch.mjs";

const section = document.querySelector(".sectionArme");
GetDataFromVal()
  .then((data) => {
    for (let index = 0; index < data.data.length; index++) {
      const element = data.data[index];

      let divSection = document.createElement("div");
      divSection.classList.add("card-main");

      let divTitle = document.createElement("div");
      divTitle.classList.add("card-title");
      divTitle.textContent = "" + element.displayName;

      let divImg = document.createElement("div");
      divImg.classList.add("card-img");
      divImg.style.backgroundImage = "url(" + element.displayIcon + ")";

      let divLinks = document.createElement("div");
      divLinks.classList.add("card-links");

      let divLink1 = document.createElement("div");
      divLink1.classList.add("card-link");
      divLink1.textContent = "Stats";

      let divLink2 = document.createElement("div");
      divLink2.classList.add("card-link");
      divLink2.textContent = "Skins";

      divLinks.appendChild(divLink1);
      divLinks.appendChild(divLink2);
      divSection.appendChild(divTitle);
      divSection.appendChild(divImg);
      divSection.appendChild(divLinks);
      section.appendChild(divSection);

      // var card = document.createElement("div");
      // card.classList.add("card");
      // card.style.width = "18rem";

      // var image = document.createElement("img");
      // image.classList.add("card-img-top");
      // image.classList.add("boximg");
      // image.style.backgroundImage = "url(" + element.displayIcon + ")";

      // var cardBody = document.createElement("div");
      // cardBody.classList.add("card-body");

      // var cardTitle = document.createElement("h5");
      // cardTitle.classList.add("card-title");
      // cardTitle.textContent = "" + element.displayName;

      // var cardLink1 = document.createElement("a");
      // cardLink1.classList.add("card-link");
      // cardLink1.href = "#";
      // cardLink1.textContent = "Stats";

      // var cardLink2 = document.createElement("a");
      // cardLink2.classList.add("card-link");
      // cardLink2.href = "#";
      // cardLink2.textContent = "Skins";

      // cardBody.appendChild(cardTitle);
      // cardBody.appendChild(cardLink1);
      // cardBody.appendChild(cardLink2);

      // card.appendChild(image);
      // card.appendChild(cardBody);

      // section.appendChild(card);
    }
  })
  .catch((error) => {
    console.log("GetDataFromVal est cassé");
  });
