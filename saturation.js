let currentSaturation = "Normal";
const saturationLevels = ["Normal","Low", "High", "Desaturate"];
const parentDocument = window.parent.document;
let iconDiv = document.querySelector(".saturation-icon");
const saturationIcons = [`<svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.2" viewBox="0 0 20 28"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M17.5323 13.5777 10 1 2.34888 13.7855C1.4995 15.1093 1 16.6628 1 18.3333 1 23.1195 5.02975 27 10 27c4.9703 0 9-3.8805 9-8.6667 0-1.6457-1.3363-4.5282-1.3489-4.5478l-.1188-.2078Z" clip-rule="evenodd"/><path fill="currentColor" fill-opacity=".35" fill-rule="evenodd" d="M10 27c4.9703 0 9-3.8805 9-8.6667 0-1.6457-1.3363-4.5282-1.3489-4.5478l-.1188-.2078L10 1" clip-rule="evenodd"/></svg>`,`<svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.2" viewBox="0 0 21 28"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M18.0323 13.5777 10.5 1 2.84888 13.7855C1.9995 15.1093 1.5 16.6628 1.5 18.3333 1.5 23.1195 5.52975 27 10.5 27c4.9703 0 9-3.8805 9-8.6667 0-1.6457-1.3363-4.5282-1.3489-4.5478l-.1188-.2078Z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M10.5 27c4.9703 0 9-3.8805 9-8.6667 0-1.6457-1.3363-4.5282-1.3489-4.5478l-.1188-.2078L10.5 1" clip-rule="evenodd"/></svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 21 28"><g fill="none" fill-rule="evenodd" transform="translate(1.5 1)"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M16.532 12.578 9 0 1.349 12.785C.5 14.109 0 15.663 0 17.333 0 22.12 4.03 26 9 26s9-3.88 9-8.667c0-1.645-1.336-4.528-1.349-4.548l-.119-.207Z"/><circle cx="12.5" cy="8" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="9.5" cy="23" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="9.5" cy="20" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="9.5" cy="17" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="9.5" cy="14" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="9.5" cy="11" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="9.5" cy="8" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="9.5" cy="5" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="12.5" cy="23" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="12.5" cy="20" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="12.5" cy="17" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="12.5" cy="14" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="12.5" cy="11" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="15.5" cy="17" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="15.5" cy="14" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="15.5" cy="20" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="15.5" cy="11" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="9.5" cy="2" r="1" fill="currentColor" fill-rule="nonzero"/><circle cx="15.5" cy="23" r="1" fill="currentColor" fill-rule="nonzero"/></g></svg>`]

export default function changeSaturation() {
  const nextSaturation =
    saturationLevels[
      (saturationLevels.indexOf(currentSaturation) + 1) %
        saturationLevels.length
    ];
  currentSaturation = nextSaturation;
  let element = parentDocument.querySelector("html");
  let text = document.querySelector("#saturationText");
  let featureDiv = document.querySelector("#saturationChange");
  if (currentSaturation === "Low") {
    iconDiv.innerHTML = saturationIcons[0];
    document.querySelector("#saturationChange .tick-check").style.display = "block";
    document.querySelector("#saturationChange .option-total").style.display = "flex";
    document.querySelector("#saturationChange .option1").classList.add("selected");
    element.style.setProperty("filter", "saturate(0.5)", "important");
    featureDiv.classList.add("selected");
    text.innerHTML = "Low";
    console.log("Low");
  } else if (currentSaturation === "High") {
    iconDiv.innerHTML = saturationIcons[1];
    document.querySelector("#saturationChange .option2").classList.add("selected");
    element.style.setProperty("filter", "saturate(3)", "important");
    text.innerHTML = "High";
  } else if (currentSaturation === "Desaturate") {
    iconDiv.innerHTML = saturationIcons[2];
    document.querySelector("#saturationChange .option3").classList.add("selected");
    element.style.setProperty("filter", "saturate(0)", "important");
    text.innerHTML = "Desaturate";
  } else {
    resetStyles();
  }
  function resetStyles() {
    document.querySelector("#saturationChange .tick-check").style.display = "none";
    document.querySelector("#saturationChange .option-total").style.display = "none";
    for (let index = 1; index < 4; index++) {
      document.querySelector(`#saturationChange .option${index}`).classList.remove("selected");
    }
    element.style.removeProperty("filter");
    text.innerHTML = "Saturation";
    featureDiv.classList.remove("selected");
    currentSaturation = "Normal";
  }
  return { resetStyles };
}
