let clickCount = 0;
const parentDocument = window.parent.document;
const featureDiv = document.querySelector("#biggerText");
const biggerZoom = [1.2, 1.3, 1.5, 1.6];
const biggerText = [4, 8, 12, 16];
let biggerTextIcons = [`<svg style="width:2.3em;" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 36 23"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-linejoin="round" d="M26.58 21.3225806V1m-7.92 4.06451613V1H34.5v4.06451613"/><path d="M22.62 21.3225806h7.92"/><path stroke-linejoin="round" d="M6.78 18.6129032V5.06451613M1.5 7.77419355V5.06451613h10.56v2.70967742"/><path d="M4.14 18.6129032h5.28"/></g></svg>`,`<svg style="width:2.5em;" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 36 23"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-linejoin="round" d="M26.58 21.3225806V1m-7.92 4.06451613V1H34.5v4.06451613"/><path d="M22.62 21.3225806h7.92"/><path stroke-linejoin="round" d="M6.78 18.6129032V5.06451613M1.5 7.77419355V5.06451613h10.56v2.70967742"/><path d="M4.14 18.6129032h5.28"/></g></svg>`,`<svg style="width:2.7em;" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 36 23"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-linejoin="round" d="M26.58 21.3225806V1m-7.92 4.06451613V1H34.5v4.06451613"/><path d="M22.62 21.3225806h7.92"/><path stroke-linejoin="round" d="M6.78 18.6129032V5.06451613M1.5 7.77419355V5.06451613h10.56v2.70967742"/><path d="M4.14 18.6129032h5.28"/></g></svg>`,`<svg style="width:2.9em;" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 36 23"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-linejoin="round" d="M26.58 21.3225806V1m-7.92 4.06451613V1H34.5v4.06451613"/><path d="M22.62 21.3225806h7.92"/><path stroke-linejoin="round" d="M6.78 18.6129032V5.06451613M1.5 7.77419355V5.06451613h10.56v2.70967742"/><path d="M4.14 18.6129032h5.28"/></g></svg>`]
let iconDiv = document.querySelector(".bigger-text-icon");

export default function increaseTextSizeOrZoom() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isFirefox = userAgent.indexOf("firefox") > -1;
  const elements = parentDocument.querySelectorAll(
    "body *:not(div,nav,footer,section,header,aside,article,main,iframe)"
  );

  clickCount++;

  if (clickCount <= 4) {
    iconDiv.innerHTML = biggerTextIcons[clickCount - 1];
    document.querySelector("#biggerText .tick-check").style.display = "block";
    document.querySelector("#biggerText .option-total").style.display = "flex";
    document.querySelector(`#biggerText .option${clickCount}`).classList.add("selected");
    featureDiv.classList.add("selected");
    if (isFirefox) {
      // Increase font size for Firefox
      elements.forEach((element) => {
        element.style.removeProperty("font-size");
        const currentSize = window.getComputedStyle(element).fontSize;
        const newSize = parseFloat(currentSize) + biggerText[clickCount - 1]; // Increase size by factor
        element.style.setProperty("font-size", newSize + "px", "important");
      });
    } else {
      // Use zoom for other browsers, excluding iframes
      const bodyElements = parentDocument.querySelectorAll(
        "body > *:not(iframe)"
      );
      bodyElements.forEach((element) => {
        let nextZoom = biggerZoom[clickCount - 1];
        element.style.setProperty("zoom", nextZoom, "important");
      });
    }
  } else {
    resetStyles(); // Reset click count
  }
  function resetStyles() {
    iconDiv.innerHTML = biggerTextIcons[1];
    document.querySelector("#biggerText .tick-check").style.display = "none";
    document.querySelector("#biggerText .option-total").style.display = "none";
    featureDiv.classList.remove("selected");

    for (let index = 1; index < 5; index++) {
      document.querySelector(`#biggerText .option${index}`).classList.remove("selected");
    }
    // Reset styles after four clicks
    if (isFirefox) {
      const elements = parentDocument.querySelectorAll("body *");
      elements.forEach((element) => {
        element.style.removeProperty("font-size"); // Reset font size
      });
    } else {
      const bodyElements = parentDocument.querySelectorAll(
        "body > *:not(iframe)"
      );
      bodyElements.forEach((element) => {
        element.style.removeProperty("zoom"); // Reset zoom
      });
    }
    clickCount = 0;
  }
  return { resetStyles };
}

// Attach the function to a button click event
// document
//   .getElementById("increaseTextSizeButton")
//   .addEventListener("click", increaseTextSizeOrZoom);
