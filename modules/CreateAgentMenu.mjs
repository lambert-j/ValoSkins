let urlAgent = "https://valorant-api.com/v1/agents/";
const container = document.querySelector(".container");

// Vas chercher les données des armes + id skins
function getDataFromValAgentMenu(id) {
  return new Promise((resolve, reject) => {
    fetch(urlAgent + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      })

      .catch((error) => {
        reject(error);
      });
  });
}

export function createAgentMenu(id) {
  getDataFromValAgentMenu(id)
    .then((data) => {
      let dataArray = data.data;

      container.innerHTML = "";
      let section = document.createElement("section");
      section.classList.add("section-agent");

      let divAgentDiv = document.createElement("div");
      divAgentDiv.classList.add("agent-div");

      let divAgent = document.createElement("div");
      divAgent.classList.add("agent");

      let divAgentTitle = document.createElement("div");
      divAgentTitle.classList.add("agent-title");
      divAgentTitle.textContent = dataArray.displayName;

      let divAgentImage = document.createElement("div");
      divAgentImage.classList.add("agent-image");
      divAgentImage.style.backgroundImage =
        "url(" + dataArray.fullPortrait + ")";

      let divAgentSpells = document.createElement("div");
      divAgentSpells.classList.add("agent-spells");

      for (let index = 0; index < data.data.abilities.length; index++) {
        const element = data.data.abilities[index];

        let divSpell = document.createElement("div");
        divSpell.classList.add("spell");

        let divSpellIconTitle = document.createElement("div");
        divSpellIconTitle.classList.add("spell-icon-title");

        let divSpellIcon = document.createElement("div");
        divSpellIcon.classList.add("spell-icon");
        divSpellIcon.style.backgroundImage = `url(${element.displayIcon})`;

        let divSpellTitle = document.createElement("div");
        divSpellTitle.classList.add("spell-title");
        divSpellTitle.textContent = "" + element.displayName;

        let divSpellText = document.createElement("div");
        divSpellText.classList.add("spell-text");
        divSpellText.textContent = "" + element.description;

        divSpellIconTitle.appendChild(divSpellIcon);
        divSpellIconTitle.appendChild(divSpellTitle);
        divSpell.appendChild(divSpellIconTitle);
        divSpell.appendChild(divSpellText);
        divAgentSpells.appendChild(divSpell);
      }

      divAgent.appendChild(divAgentTitle);
      divAgent.appendChild(divAgentImage);
      divAgentDiv.appendChild(divAgent);
      divAgentDiv.appendChild(divAgentSpells);
      section.appendChild(divAgentDiv);
      container.appendChild(section);
    })
    .catch((error) => {
      console.log("createAgentMenu est cassé");
    });
}
