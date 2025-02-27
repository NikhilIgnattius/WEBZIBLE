function loadFonts() {
  const parentDocument = window.parent.document;
      
  const preconnect1 = document.createElement("link");
  preconnect1.rel = "preconnect";
  preconnect1.href = "https://fonts.googleapis.com";
  parentDocument.head.appendChild(preconnect1);

  const preconnect2 = document.createElement("link");
  preconnect2.rel = "preconnect";
  preconnect2.href = "https://fonts.gstatic.com";
  preconnect2.crossOrigin = "anonymous";
  parentDocument.head.appendChild(preconnect2);

  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href =
    "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
    parentDocument.head.appendChild(fontLink);

    const fontFaceStyle = parentDocument.createElement("style");
    fontFaceStyle.innerHTML = `
      @font-face {
        font-family: 'Zoho-Puvi';
        src: url('Zoho-Puvi-Regular.otf');
      }
    `;
    parentDocument.head.appendChild(fontFaceStyle);
}
loadFonts();
let clickCount = 0;
let diffFonts = ["Merriweather", "Lato", "Poppins","Zoho-Puvi"];
const parentDocument = window.parent.document;
let featureDiv = document.getElementById("legibleFonts");
let featureText = document.getElementById("legibleText");

export default function changeFonts() {
  const elements = parentDocument.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, p, span, a, strong, em, b, u, small, mark, del, ins, sub, sup, blockquote, q, code, pre, abbr, cite, dfn, kbd, samp, var"
  );
  clickCount++;
  featureDiv.classList.add("selected");
  if (clickCount <= 4) {
    console.log(diffFonts[clickCount-1])
    document.querySelector("#legibleFonts .option-total").style.display = "flex";
    document.querySelector(`#legibleFonts .option${clickCount}`).classList.add("selected");
    document.querySelector("#legibleFonts .tick-check").style.display = "block";
    //body.style.fontFamily = diffFonts[clickCount - 1];
    featureText.innerText = diffFonts[clickCount - 1];
    elements.forEach((element) => {
      element.style.setProperty(
        "font-family",
        `${diffFonts[clickCount - 1]}`,
        "important"
      );
    });
  } else {
    resetStyles();
    return
  }
  function resetStyles() {
    document.querySelector("#legibleFonts .tick-check").style.display = "none";
    document.querySelector("#legibleFonts .option-total").style.display = "none";
    for (let index = 1; index <= 4; index++) {
    document.querySelector(`#legibleFonts .option${index}`).classList.remove("selected")
    }
    featureDiv.classList.remove("selected");
    featureText.innerText = "Legible Fonts";
    elements.forEach((element) => {
      element.style.removeProperty("font-family");
    });
    clickCount = 0;
  }
  return { resetStyles };
}
