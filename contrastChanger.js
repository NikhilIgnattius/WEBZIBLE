let currentTheme = "Reset";
let featureDiv = document.querySelector("#contrastChange");
let clickCount = 0;
let iconDiv = document.querySelector(".contrast-change-icon");
// console.log(iconDiv,1)
const contrastIcons = [`<svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 34 30.8">
  <defs>
    <style>
      .cls-1 {
        fill: #006be6;
        fill-rule: evenodd;
      }

      .cls-2 {
        fill: none;
        stroke: #006be6;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2px;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer_1">
    <rect class="cls-2" x="1" y="1" width="32" height="22.4" rx="2" ry="2"/>
    <line class="cls-2" x1="10.6" y1="29.8" x2="23.4" y2="29.8"/>
    <line class="cls-2" x1="17" y1="23.4" x2="17" y2="29.8"/>
    <path class="cls-1" d="M13.03,15.17l7.37-5.16c1.13,1.74.93,4.1-.6,5.63-1.76,1.76-4.61,1.76-6.36,0-.15-.15-.28-.31-.41-.47Z"/>
    <path class="cls-1" d="M13.04,15.17l-10.84,7.59c-.17.12-.37.18-.57.18-.55,0-1-.45-1-1V3.46c0-1.1.9-2,2-2h28.73c.13,0,.25.06.33.17.13.18.08.43-.1.56l-11.18,7.83c-.17-.26-.37-.51-.6-.74-1.76-1.76-4.61-1.76-6.36,0-1.61,1.61-1.74,4.13-.41,5.9Z"/>
  </g>
</svg>`,`<svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.2" viewBox="0 0 34 32"><path fill="currentColor" fill-rule="evenodd" d="M31 1H3c-1.10457 0-2 .89543-2 2v18.4c0 1.1046.89543 2 2 2h28c1.1046 0 2-.8954 2-2V3c0-1.10457-.8954-2-2-2ZM17 6.375c-3.1066 0-5.625 2.5184-5.625 5.625s2.5184 5.625 5.625 5.625 5.625-2.5184 5.625-5.625S20.1066 6.375 17 6.375Z" clip-rule="evenodd"/><path fill="currentColor" d="M3 2h28V0H3v2ZM2 3c0-.55228.44772-1 1-1V0C1.34315 0 0 1.34315 0 3h2Zm0 18.4V3H0v18.4h2Zm1 1c-.55229 0-1-.4477-1-1H0c0 1.6569 1.34315 3 3 3v-2Zm28 0H3v2h28v-2Zm1-1c0 .5523-.4477 1-1 1v2c1.6569 0 3-1.3431 3-3h-2ZM32 3v18.4h2V3h-2Zm-1-1c.5523 0 1 .44771 1 1h2c0-1.65685-1.3431-3-3-3v2ZM12.375 12c0-2.55432 2.0707-4.625 4.625-4.625v-2c-3.6589 0-6.625 2.96611-6.625 6.625h2ZM17 16.625c-2.5543 0-4.625-2.0707-4.625-4.625h-2c0 3.6589 2.9661 6.625 6.625 6.625v-2ZM21.625 12c0 2.5543-2.0707 4.625-4.625 4.625v2c3.6589 0 6.625-2.9661 6.625-6.625h-2ZM17 7.375c2.5543 0 4.625 2.07068 4.625 4.625h2c0-3.65889-2.9661-6.625-6.625-6.625v2Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 30h12.8M17 23v6.4"/></svg>`,
`<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 34 32"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><rect width="32" height="22.4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="2"/><circle cx="16" cy="11" r="5" fill="currentColor" fill-rule="nonzero"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 29h12.8M16 23v5.4"/></g></svg>`]
export default function contrastChanger() {
  clickCount++;
  if (clickCount < 4) {
    document.querySelector("#contrastChange .option-total").style.display = "flex";
    document.querySelector(`#contrastChange .option${clickCount}`).classList.add("selected");
  } else {
    iconDiv.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path
              d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18V4a8 8 0 0 1 0 16z"
            />
          </svg>`
    document.querySelector("#contrastChange .option-total").style.display = "none";
    for (let index = 1; index < 4; index++) {
      document.querySelector(`#contrastChange .option${index}`).classList.remove("selected");
    }
    document.querySelector("#contrastChange .tick-check").style.display = "none";
    clickCount = 0;
  }

  const parentDocument = window.parent.document;
  const iframeHTML = parentDocument.querySelector(".iframe-page");

  function resetStyles() {
    if (iframeHTML) {
      iframeHTML.style.filter = "invert(0%)";
    }
    const allElements = parentDocument.querySelectorAll("*");
    allElements.forEach((element) => {
      element.style.removeProperty("color");
      element.style.removeProperty("background-color");
      element.style.removeProperty("border-color");
    });
    parentDocument.querySelector("html").style.removeProperty("filter");
  }

  function applyStyles(elements, styles, content,icon) {
    // console.log(iconDiv)
    // iconDiv.innerHTML = icon;
    if (!styles) return;
    document.body.querySelector("#contrastText").innerText = content;
    elements.forEach((element) => {
      for (let property in styles) {
        element.style.setProperty(property, styles[property], "important");
      }
    });
  }

  const themes = ["Reset", "Invert", "Dark", "Light"];
  const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
  currentTheme = nextTheme;

  if (currentTheme === "Reset") {
    document.body.querySelector("#contrastText").innerText = "Contrast +";
    featureDiv.classList.remove("selected");
    resetStyles();
  } else if (currentTheme === "Invert") {
    console.log(iconDiv)
    iconDiv.innerHTML = contrastIcons[0];
    document.querySelector("#contrastChange .tick-check").style.display = "block";
    resetStyles();
    const htmlElement = parentDocument.querySelector("html");
    document.body.querySelector("#contrastText").innerText = "Invert";
    featureDiv.classList.add("selected");
    if (iframeHTML) iframeHTML.style.filter = "invert(100%)";
    htmlElement.style.filter = "invert(100%)";
  } else {
    resetStyles();
    const themeStyles = {
      Dark: {
        text: { color: "#50D0A0", "background-color": "black" },
        link: {
          color: "#FDFF3C",
          "background-color": "black",
          "border-color": "white",
        },
        input: {
          color: "#50D0A0",
          "background-color": "black",
          "border-color": "white",
        },
        content: "Dark",
      },
      Light: {
        text: { color: "black", "background-color": "white" },
        link: {
          color: "blue",
          "background-color": "white",
          "border-color": "black",
        },
        input: {
          color: "black",
          "background-color": "white",
          "border-color": "black",
        },
        content: "Light",
      },
    };

    const selectedTheme = themeStyles[currentTheme]; // ✅ Now defined before use
    console.log(selectedTheme)
    // if (selectedTheme.content === "Dark"){
    //   console.log("Dark")
    //   console.log(iconDiv,2)
    //   iconDiv.innerHTML = contrastIcons[1];
    // }else if (selectedTheme.content === "Light"){
    //   iconDiv.innerHTML = contrastIcons[2];
    // }
    applyStyles(
      parentDocument.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, li, span, ul"
      ),
      selectedTheme.text,
      selectedTheme.content,
    );
    applyStyles(
      parentDocument.querySelectorAll("div, section, body"),
      selectedTheme.text,
      selectedTheme.content
    );

    const linksAndChildren = [];
    parentDocument.querySelectorAll("a").forEach((link) => {
      linksAndChildren.push(link, ...link.querySelectorAll("*"));
    });
    applyStyles(linksAndChildren, selectedTheme.link, selectedTheme.content);

    applyStyles(
      parentDocument.querySelectorAll("input, button"),
      selectedTheme.input,
      selectedTheme.content
    );
  }

  function resetMain() {
    iconDiv.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path
              d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18V4a8 8 0 0 1 0 16z"
            />
          </svg>`
    document.querySelector(".option-total").style.display = "none";
    document.querySelector("#contrastChange .tick-check").style.display = "none";
    document.body.querySelector("#contrastText").innerText = "Contrast +";
    featureDiv.classList.remove("selected");
    resetStyles();
    currentTheme = "Reset";
    clickCount = 0;
    document.querySelector(".option-total").style.display = "none";
    for (let index = 1; index < 4; index++) {
      document.querySelector(`#contrastChange .option${index}`).classList.remove("selected");
    }

  }

  return { resetMain }; // ✅ Always returning an object
}
