let clickCount = 0;
const parentDocument = window.parent.document;
const wordSpacingChoices = [".16em", ".32em", ".48em"];
const letterSpacingChoices = [".12em", ".24em", ".36em"];
const textSpacingIcons = [`<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 32 14"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="4,7" d="M3 7h26"/><path stroke-linejoin="round" d="M7 13 1 7l6-6m18 12 6-6-6-6"/></g></svg>`,`<svg style="width:4.4em;" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 55 14"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="4,7" d="M3.5 7h48"/><path stroke-linejoin="round" d="M7 13 1 7l6-6m41 12 6-6-6-6"/></g></svg>`,`<svg style="width:5.4em;" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 66 14"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="4,7" d="M3 7h62"/><path stroke-linejoin="round" d="M7 13 1 7l6-6m51 12 6-6-6-6"/></g></svg>`]
const choices = ["Small Spacing", "Medium Spacing", "Large Spacing"];
let featureDiv = document.querySelector("#textSpacing");
let featureText = document.querySelector("#spacingText");
let iconDiv = document.querySelector(".text-spacing-icon")
export default function increaseTextSpacing() {
  console.log(iconDiv)
  clickCount++;
  if (clickCount <= 3) {
    document.querySelector("#textSpacing .option-total").style.display = "flex";
    document.querySelector(`#textSpacing .option${clickCount}`).classList.add("selected");
    document.querySelector("#textSpacing .tick-check").style.display = "block";
    featureDiv.classList.add("selected");
    const elements = parentDocument.querySelectorAll("body *:not(iframe)");
    elements.forEach((element) => {
      featureText.innerText = choices[clickCount - 1];
      let newWordSpacing = wordSpacingChoices[clickCount - 1];
      let newLetterSpacing = letterSpacingChoices[clickCount - 1];
      iconDiv.innerHTML = textSpacingIcons[clickCount - 1];
      element.style.setProperty("word-spacing", newWordSpacing, "important");
      element.style.setProperty(
        "letter-spacing",
        newLetterSpacing,
        "important"
      );
    });
  } else {
    resetStyles();
  }
  function resetStyles() {
    document.querySelector(".text-spacing-icon").innerHTML = `<svg
            fill="#000000"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M16,5V4H13v9h1a1,1,0,0,1,0,2H10a1,1,0,0,1,0-2h1V4H8V5A1,1,0,0,1,6,5V3A1,1,0,0,1,7,2H17a1,1,0,0,1,1,1V5a1,1,0,0,1-2,0Zm3.707,9.293a1,1,0,0,0-1.414,1.414L19.586,17H4.414l1.293-1.293a1,1,0,0,0-1.414-1.414l-3,3a1,1,0,0,0,0,1.414l3,3a1,1,0,1,0,1.414-1.414L4.414,19H19.586l-1.293,1.293a1,1,0,1,0,1.414,1.414l3-3a1,1,0,0,0,0-1.414Z"
              ></path>
            </g>
          </svg>`;
    document.querySelector("#textSpacing .tick-check").style.display = "none";
    document.querySelector("#textSpacing .option-total").style.display = "none";
    for (let index = 1; index < 4; index++) {
    document.querySelector(`#textSpacing .option${index}`).classList.remove("selected")
    }
    featureText.innerText = "Text Spacing";
    featureDiv.classList.remove("selected");
    const elements = parentDocument.querySelectorAll("body *:not(iframe)");
    elements.forEach((element) => {
      element.style.removeProperty("word-spacing");
      element.style.removeProperty("letter-spacing");
    });
    clickCount = 0;
  }
  return { resetStyles };
}
