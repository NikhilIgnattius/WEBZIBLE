import contrastChanger from "./contrastChanger.js";
import highlightLink from "./highlightLinks.js";

function change(){

  contrastChanger()
}
function highlightLinks() {
  console.log("Links highlighted.");
}

function print(message) {
  console.log(message);
}

document.getElementById("contrastChange").addEventListener("click",contrastChanger);
document.getElementById("highlightLinks").addEventListener("click",highlightLink);

