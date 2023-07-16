const container = document.querySelector(".container");

const jsonData = {
  "7eaecc1b-4337-bbf6-6ab9-04b8f06b3319": {
    picture: "asset/img/ascent.webp",
    displayName: "Ascent",
  },
  "d960549e-485c-e861-8d71-aa9d1aed12a2": {
    picture: "asset/img/split.webp",
    displayName: "Split",
  },
  "b529448b-4d60-346e-e89e-00a4c527a405": {
    picture: "asset/img/fracture.webp",
    displayName: "Fracture",
  },
  "2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba": {
    picture: "asset/img/bind.webp",
    displayName: "Bind",
  },
  "2fb9a4fd-47b8-4e7d-a969-74b4046ebd53": {
    picture: "asset/img/breeze.webp",
    displayName: "Breeze",
  },
  "2fe4ed3a-450a-948b-6d6b-e89a78e680a9": {
    picture: "asset/img/lotus.webp",
    displayName: "Lotus",
  },
  "fd267378-4d1d-484f-ff52-77821ed10dc2": {
    picture: "asset/img/pearl.webp",
    displayName: "Pearl",
  },
  "e2ad5c54-4114-a870-9641-8ea21279579a": {
    picture: "asset/img/icebox.webp",
    displayName: "Icebox",
  },
  "2bee0dc9-4ffe-519b-1cbd-7fbe763a6047": {
    picture: "asset/img/haven.webp",
    displayName: "Haven",
  },
};

export function createMapsCharts(buttonId) {
  const buttonData = jsonData[buttonId];
  if (buttonData) {
    container.innerHTML = "";

    const sectionMap = document.createElement("div");
    sectionMap.classList.add("section-map");

    const mapNameGigabox = document.createElement("div");
    mapNameGigabox.classList.add("map-name-gigabox");

    const mapName = document.createElement("div");
    mapName.classList.add("map-name");
    mapName.textContent = buttonData.displayName;

    const mapLegend = document.createElement("div");
    mapLegend.classList.add("map-legend");

    const mapLegendText = document.createElement("div");
    mapLegendText.classList.add("map-legend-text");
    mapLegendText.textContent = "Legend";

    const mapLegendBox = document.createElement("div");
    mapLegendBox.classList.add("map-legend-box");

    const mapLegendTextBox = document.createElement("div");
    mapLegendTextBox.classList.add("map-legend-text-box");

    const textBoxes = [
      { color: "tcolor1", text: "Defenders Buy Zone" },
      { color: "tcolor2", text: "Attackers Buy Zone" },
      { color: "tcolor3", text: "Spike Plant Zone" },
      { color: "tcolor4", text: "Defenders Spawn Barrier" },
      { color: "tcolor5", text: "Attackers Spawn Barrier" },
    ];

    textBoxes.forEach((item) => {
      const textBox = document.createElement("div");
      textBox.classList.add("text-box");

      const textColor = document.createElement("div");
      textColor.classList.add("text-text-color", item.color);

      const textText = document.createElement("div");
      textText.classList.add("text-text");
      textText.textContent = item.text;

      textBox.appendChild(textColor);
      textBox.appendChild(textText);
      mapLegendTextBox.appendChild(textBox);
    });

    mapLegendBox.appendChild(mapLegendTextBox);
    mapLegend.appendChild(mapLegendText);
    mapLegend.appendChild(mapLegendBox);

    const mapPicture = document.createElement("img");
    mapPicture.src = buttonData.picture;
    mapPicture.classList.add("map-picture");

    sectionMap.appendChild(mapNameGigabox);
    mapNameGigabox.appendChild(mapName);
    mapNameGigabox.appendChild(mapLegend);
    sectionMap.appendChild(mapPicture);
    container.appendChild(sectionMap);
  }
}
