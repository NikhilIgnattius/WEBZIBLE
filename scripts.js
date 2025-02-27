import contrastChanger from "./contrastChanger.js";
import highlightLink from "./highlightLinks.js";
import biggerText from "./biggerText.js";
import increaseLineHeight from "./lineHeight.js";
import saturationChange from "./saturation.js";
import cursorChanger from "./cursor.js";
import changeAlignment from "./textAlignment.js";
import textSpacing from "./textSpacing.js";
import changeText from "./legibleFonts.js";
import hideImages from "./hideImages.js";
import toolTip from "./toolTips.js";
import imageAlt from "./imageAlt.js";
import pauseAnimation from "./pauseAnimation.js";
import Structure from "./structure.js";

const parentDocument = window.parent.document;

document
  .getElementById("pauseAnimations")
  .addEventListener("click", pauseAnimation);

document
  .getElementById("contrastChange")
  .addEventListener("click", contrastChanger);

document
  .getElementById("highlightLinks")
  .addEventListener("click", highlightLink);

document.getElementById("biggerText").addEventListener("click", biggerText);

document.getElementById("textSpacing").addEventListener("click", textSpacing);

document.getElementById("hideImages").addEventListener("click", hideImages);

document
  .getElementById("lineHeight")
  .addEventListener("click", increaseLineHeight);

document
  .getElementById("saturationChange")
  .addEventListener("click", saturationChange);

document.getElementById("legibleFonts").addEventListener("click", changeText);

document
  .getElementById("cursorChanger")
  .addEventListener("click", cursorChanger);

document
  .getElementById("alignmentChange")
  .addEventListener("click", changeAlignment);

document.getElementById("imageAlt").addEventListener("click", imageAlt);
document.getElementById("toolTip").addEventListener("click", toolTip);

document.getElementById("close-widget").addEventListener("click", () => {
  const iframeHTML = parentDocument.querySelector(".iframe-page");
  iframeHTML.style.display = "none";
});

document.getElementById("close-widget2").addEventListener("click", () => {
  const iframeHTML = parentDocument.querySelector(".iframe-page");
  iframeHTML.style.display = "none";
});


document.getElementById("resetSettings").addEventListener("click", () => {
  contrastChanger().resetMain();
  highlightLink().resetStyles();
  biggerText().resetStyles();
  textSpacing().resetStyles();
  changeText().resetStyles();
  saturationChange().resetStyles();
  increaseLineHeight().resetStyles();
  hideImages().resetStyles();
  toolTip().resetStyles();
  changeAlignment().resetStyles();
  cursorChanger().resetCursor();
  pauseAnimation().resetStyles();
});
let container = document.querySelector(".widget2");
document.getElementById("close-image-alt").addEventListener("click", () => {
  container.style.display = "none";
  container.style.transform = "translateX(100%)";
});


// let alt = imageAlt;
// console.log(alt().generateAltInputForm());
// console.log(alt().decorativeOnOff());

function structureShow(){
  let struc = new Structure();
  let html = struc.Struc();
  let allStruc = document.createElement("div");
  allStruc.classList.add("structure-widget");
  allStruc.style.width = "450px";
  allStruc.style.height = "90vh";
  allStruc.style.boxShadow = "1px 1px 10px rgba(0, 0, 0, 0.39);";
  allStruc.style.borderRadius = "15px";
  allStruc.style.margin = "60px 40px";
  allStruc.style.backgroundColor = "white";
  allStruc.appendChild(html);

  return function createDiv(){
    if(![...document.body.childNodes].includes(allStruc)){
      document.body.appendChild(allStruc);
    }
    else{
      if([...document.body.childNodes].includes(allStruc)){
      document.body.removeChild(allStruc);
    }
  }
}
}
document.querySelector("#structure-show").addEventListener("click", structureShow())
