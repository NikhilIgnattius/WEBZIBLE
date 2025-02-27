let currentCursor = "Cursor";
let parentDocument = window.parent.document;
let featureDiv = document.querySelector("#cursorChanger");
let iconDiv = document.querySelector(".cursor-icon");
let cursorIcons = [`<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 36 26"><path fill="currentColor" d="m29.012621 0 3.008677.03216C33.117497.04383 34 .93578 34 2.03204V6.999l1 .00098c.552285 0 1 .44772 1 1v10c0 .55229-.447715 1-1 1l-1-.00098V24c0 1.10457-.895431 2-2 2H4c-1.104569 0-2-.89543-2-2v-5.001l-1 .00098c-.552285 0-1-.44771-1-1v-10c0-.55228.447715-1 1-1L2 6.999V2.04929c0-1.10303.893028-1.99782 1.996056-2L28.987378 0h.025243ZM5 18.999H3.8V24c0 .11046.089543.2.2.2h28c.110457 0 .2-.08954.2-.2v-5.001H31V22c0 .55228-.447715 1-1 1H6c-.552285 0-1-.44772-1-1v-3.001Zm28.75-8.99901H2.25c-.138071 0-.25.11193-.25.25v5.5c0 .13807.111929.25.25.25h31.5c.138071 0 .25-.11193.25-.25v-5.5c0-.13807-.111929-.25-.25-.25Zm-4.756547-8.19998-24.993847.04928c-.110303.00022-.199606.0897-.199606.2V6.999H5V4.0507c0-.5513.446172-.9986.997466-1l19.989356-.05066.026356.00011 3.997466.04255c.548101.00583.989356.45181.989356.99994V6.999h1.2V2.03204c0-.10962-.08825-.19882-.19787-.19999l-3.008677-.03204Z"/></svg>`,`<svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.2" viewBox="0 0 36 26"><path fill="currentColor" fill-rule="evenodd" d="M28.993.0000711V0l-.0113.0000223-24.98564.049276C3.44479.0503855 2.94455.275608 2.58439.636476 2.22424.997344 2 1.49803 2 2.04929V24c0 .552.22484 1.0533.58579 1.4142C2.94673 25.7751 3.44796 26 4 26h28c.552 0 1.0533-.2249 1.4142-.5858C33.7752 25.0533 34 24.552 34 24V13.778c-.014.1248-.1199.2219-.2484.2219H32.2V24c0 .0555-.0214.1042-.0586.1414S32.0555 24.2 32 24.2H4c-.05548 0-.10424-.0214-.14142-.0586C3.8214 24.1042 3.8 24.0555 3.8 24V13.9999H2.25156c-.13807 0-.25-.112-.25-.25v-1.5c0-.1381.11193-.25.25-.25H3.8V2.04929c0-.05539.02135-.10411.05844-.14128.03709-.03716.08577-.05861.14117-.05872l24.97999-.04926 3.0225.03203h.0001c.055.0006.1033.02223.14.05932.0367.0371.0578.08561.0578.14067v9.96785h1.5516c.1285 0 .2344.097.2484.2218V2.03205c0-.54789-.2216-1.046139-.5783-1.406664-.3567-.360523-.8525-.5873892-1.4004-.5932238v-4e-7L28.993.0000711Z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M35 8.99976H1c-.552285 0-1 .44771-1 1v6.00004c0 .5522.447715 1 1 1h34c.5523 0 1-.4478 1-1V9.99976c0-.55229-.4477-1-1-1ZM2.25 11.9998h31.5c.1381 0 .25.1119.25.25v1.5c0 .138-.1119.25-.25.25H2.25c-.13807 0-.25-.112-.25-.25v-1.5c0-.1381.11193-.25.25-.25Z" clip-rule="evenodd"/></svg>`]
export default function cursorChanger() {
  function bigCursor() {
    // just simply changing cursor by url
    const styleContent = `
  .large-cursor, .large-cursor * {
    cursor: url('Big-Cursor1.png'), auto !important;
    }
    `;

    const ele = parentDocument.createElement("style");
    ele.textContent = styleContent;

    // Cloning the style element for the current document
    const eleClone = ele.cloneNode(true);

    parentDocument.head.appendChild(ele);
    document.head.appendChild(eleClone);
    parentDocument.querySelector("html").classList.add("large-cursor");
    document.querySelector("html").classList.add("large-cursor");
  }

  function createReadingGuide() {
    parentDocument.querySelector("html").classList.remove("large-cursor");
    document.querySelector("html").classList.remove("large-cursor");

    const container = parentDocument.createElement("div"); // creating a parent div and giving them z index so that it could appear on top of every div or section
    const line = parentDocument.createElement("div"); // creating a line for the reading guide
    const pointer = parentDocument.createElement("div"); // creating a pointer to locate the letters

    let style = parentDocument.createElement("style");
    style.textContent = `
    .rg-line01 {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  display: flex; 
  flex-direction: column;
  align-items: center;
}
*{
cursor:none;
}
.rg-line02 {
  width: 100%;
  height: 12px;
  border-radius:6px;
  background-color: black;
  border: 2px solid yellow;
}
.rg-line03 {
  border: 1px solid yellow;
  width: 16px;
  height: 16px;
  border-left:10px solid transparent ;
  border-right: 10px solid transparent;
  border-bottom: 16px solid black;
  margin-bottom: -2px;
  position: relative;
  transition: left 0.0001s ease-out;
}`;
    parentDocument.head.appendChild(style);

    // Clone elements for the current document
    // const containerClone = container.cloneNode(true);
    // const lineClone = line.cloneNode(true);
    // const pointerClone = pointer.cloneNode(true);
    // const styleClone = style.cloneNode(true);

    container.classList.add("rg-line01");
    line.classList.add("rg-line02");
    pointer.classList.add("rg-line03");

    container.appendChild(pointer);
    container.appendChild(line);

    parentDocument.body.appendChild(container);

    // Append clones to the current document
    // document.head.appendChild(styleClone);
    // containerClone.classList.add("rg-line01");
    // lineClone.classList.add("rg-line02");
    // pointerClone.classList.add("rg-line03");

    // containerClone.appendChild(pointerClone);
    // containerClone.appendChild(lineClone);

    // document.body.appendChild(containerClone);

    const updateGuideWidth = () => {
      // A function where Reading line changes its width according to its viewport size
      const guideWidth = Math.max(750, Math.min(window.innerWidth * 0.1, 150));
      container.style.width = `${guideWidth}px`;
      // containerClone.style.width = `${guideWidth}px`;
      return guideWidth;
    };

    let guideWidth = updateGuideWidth();
    window.addEventListener("resize", () => {
      //every time the window gets resized the line width gets resized
      guideWidth = updateGuideWidth();
    });

    const updateGuidePosition = (e, docContainer, docPointer) => {
      // Every time the cursor moves the reading guide line moves along with it
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let leftPosition = e.clientX - guideWidth / 2;
      let topPosition = e.clientY;

      let pointerOffset = 0;

      if (leftPosition <= 0) {
        // if the reading guide hits the left side of the screen the pointer starts to move on left side
        const overflow = -leftPosition;
        pointerOffset = -Math.min(overflow, guideWidth / 2 - 8);
        leftPosition = 0;
      } else if (leftPosition + guideWidth >= windowWidth) {
        // elseif the reading guide hits the right side of the screen the pointer starts to move right side
        const overflow = leftPosition + guideWidth - windowWidth;
        pointerOffset = Math.min(overflow, guideWidth / 2 - 8);
        leftPosition = windowWidth - guideWidth;
      }

      topPosition = Math.max(8, Math.min(topPosition, windowHeight - 2));

      docContainer.style.left = `${leftPosition}px`;
      docContainer.style.top = `${topPosition}px`;
      docPointer.style.left = `${pointerOffset}px`;
    };

    parentDocument.addEventListener("mousemove", (e) => {
      updateGuidePosition(e, container, pointer);
    });

    // document.addEventListener("mousemove", (e) => {
    //   updateGuidePosition(e, containerClone, pointerClone);
    // });
  }
  function addReadingMask() {
    // creating a Readingmask
    parentDocument.body.removeChild(parentDocument.querySelector(".rg-line01"));
    // document.body.removeChild(document.querySelector(".rg-line01"));

    const maskOverlay = parentDocument.createElement("div"); // creating a parent div where the opacity less black background is applied
    const borderElement = parentDocument.createElement("div");
    let style = parentDocument.createElement("style");
    style.textContent = `
      .cm-line01 {
  position: fixed;
  top: 0;
  left: 0;
  width: 150%;
  height: 150%;
  background-color: rgba(0, 0, 0, 0.7);
  pointer-events: none;
  z-index:10000;
  overflow: hidden;
  scroll-width: none;
}
*{
cursor:auto;
}
.cm-line02 {
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  height: 150%;
  pointer-events: none;
  border: 2px solid white;
  z-index:8000;
  scroll-width: none;
  overflow: hidden;
}`;
    parentDocument.head.appendChild(style);
    document.querySelector("html").classList.remove("large-cursor");

    maskOverlay.classList.add("cm-line01");
    borderElement.classList.add("cm-line02");

    parentDocument.body.appendChild(borderElement);
    parentDocument.body.appendChild(maskOverlay);

    const updateMaskPosition = (event, docMaskOverlay, docBorderElement) => {
      const mouseY = event.clientY;
      const stripHeight = 150;
      const topPosition = mouseY - stripHeight / 2;
      docMaskOverlay.style.clipPath = `polygon(
                0 0,
                100% 0,
                100% ${topPosition}px,
                0 ${topPosition}px,
                0 ${topPosition + stripHeight}px,
                100% ${topPosition + stripHeight}px,
                100% 100%,
                0 100%
            )`;

      docBorderElement.style.clipPath = `polygon(
                0 0,
                100% 0,
                100% ${topPosition + 2}px, /* Adjust for border width */
                0 ${topPosition + 2}px,       /* Adjust for border width */
                0 ${
                  topPosition + stripHeight - 2
                }px, /* Adjust for border width */
                100% ${
                  topPosition + stripHeight - 2
                }px, /* Adjust for border width */
                100% 100%,
                0 100%
            )`;
    };

    parentDocument.addEventListener("mousemove", (event) => {
      updateMaskPosition(event, maskOverlay, borderElement);
    });

    // document.addEventListener("mousemove", (event) => {
    //   updateMaskPosition(event, maskOverlayClone, borderElementClone);
    // });
  }

  function resetStyles() {
    //resets to normal page mode by removing the reading mask
    parentDocument.body.removeChild(parentDocument.querySelector(".cm-line01"));
    parentDocument.body.removeChild(parentDocument.querySelector(".cm-line02"));
    // document.body.style.cursor = "pointer , auto";
  }

  

  //Changing the modes on button clicks

  let cursor = ["Cursor", "Big Cursor", "Reading Guide", "Reading Mask"];
  const nextCursor =
    cursor[(cursor.indexOf(currentCursor) + 1) % cursor.length];
  console.log(currentCursor, nextCursor);
  currentCursor = nextCursor;
  document.getElementById("cursorText").textContent = currentCursor;
  featureDiv.classList.add("selected");

  if (currentCursor === "Cursor") {
    document.querySelector("#cursorChanger .tick-check").style.display = "none";
    document.querySelector("#cursorChanger .option-total").style.display = "none";
    for (let index = 1; index < 4; index++) {
      document.querySelector(`#cursorChanger .option${index}`).classList.remove("selected");
    }
    featureDiv.classList.remove("selected");
    resetStyles();
    // return;
  }

  if (currentCursor === "Big Cursor") {
    document.querySelector("#cursorChanger .tick-check").style.display = "block";
    document.querySelector("#cursorChanger .option-total").style.display = "flex";
    document.querySelector("#cursorChanger .option1").classList.add("selected");
    bigCursor();
    // return;
  }

  if (currentCursor === "Reading Guide") {
    iconDiv.innerHTML = cursorIcons[1];
    document.querySelector("#cursorChanger .option2").classList.add("selected");
    createReadingGuide();
    // return;
  }

  if (currentCursor === "Reading Mask") {
    iconDiv.innerHTML = cursorIcons[0];
    document.querySelector("#cursorChanger .option3").classList.add("selected");
    addReadingMask();
    // return;
  }
  function resetCursor() {
    // Remove the large cursor styles safely
    document.querySelector("html").classList.remove("large-cursor");
    parentDocument.querySelector("html").classList.remove("large-cursor");
  
    // Remove the dynamically added cursor styles
    let styleTags = parentDocument.head.querySelectorAll("style");
    styleTags.forEach((style) => {
      if (style.textContent.includes(".large-cursor") || style.textContent.includes(".rg-line01") || style.textContent.includes(".cm-line01")) {
        style.remove();
      }
    });
  
    // Remove reading guide elements
    parentDocument.querySelector(".rg-line01")?.remove();
  
    // Remove reading mask elements
    parentDocument.querySelector(".cm-line01")?.remove();
    parentDocument.querySelector(".cm-line02")?.remove();
  
    // Restore cursor styles
    parentDocument.body.style.cursor = "auto";
    document.body.style.cursor = "auto";
  
    // Reset UI elements in the cursor changer
    document.querySelector("#cursorChanger .tick-check").style.display = "none";
    document.querySelector("#cursorChanger .option-total").style.display = "none";
    for (let index = 1; index < 4; index++) {
      document.querySelector(`#cursorChanger .option${index}`)?.classList.remove("selected");
    }
    featureDiv.classList.remove("selected");
  
    // Reset currentCursor state
    currentCursor = "Cursor";
    document.getElementById("cursorText").textContent = currentCursor;
  }
  
  return {resetCursor};  
}
