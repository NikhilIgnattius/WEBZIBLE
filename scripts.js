import contrastChanger from "https://nikhilignattius.github.io/WEBZIBLE/contrastChanger.js";
import highlightLink from "https://nikhilignattius.github.io/WEBZIBLE/highlightLinks.js";
import biggerText from "https://nikhilignattius.github.io/WEBZIBLE/biggerText.js";
import increaseLineHeight from "https://nikhilignattius.github.io/WEBZIBLE/lineHeight.js";
import saturationChange from "https://nikhilignattius.github.io/WEBZIBLE/saturation.js";
import cursorChanger from "https://nikhilignattius.github.io/WEBZIBLE/cursor.js";
import changeAlignment from "https://nikhilignattius.github.io/WEBZIBLE/textAlignment.js";
import textSpacing from "https://nikhilignattius.github.io/WEBZIBLE/textSpacing.js";
import changeText from "https://nikhilignattius.github.io/WEBZIBLE/legibleFonts.js";
import hideImages from "https://nikhilignattius.github.io/WEBZIBLE/hideImages.js";
import toolTip from "https://nikhilignattius.github.io/WEBZIBLE/toolTips.js";

const parentDocument = window.parent.document;

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

document.getElementById("toolTip").addEventListener("click", toolTip);

document.getElementById("close-widget").addEventListener("click", () => {
  // print("Widget closed.");
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
});

// let alt = imageAlt;
// console.log(alt().generateAltInputForm());
// console.log(alt().decorativeOnOff());
