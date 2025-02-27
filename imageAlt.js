let parentDocument = window.parent.document;

export default function generateAltInputForm() {
  const styleContent = `
    .alt-changer{
  width:100%;
  background-color: rgba(255, 255, 255, 0.813);
  height: 125px;
  border-radius:16px;
  padding: 16px 16px;
  display: flex;
  margin-bottom: 16px;
}

.alt-changer img{
  border-radius: 8px;
  width: 100px;
  height: 100%;
  object-fit: contain;
  object-position: center;
  /* border: 1px solid red; */
  margin-right:1em
}
.alt-changer>.alt-img-info{
  /* border: 1px solid green; */
  width: 90%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* padding: 8px; */
  gap:1em;
}
.alt-img-info .alt-inp{
  width: 100%;
  /* height: 20%; */
  height: 1.8em;
  border-radius: 16px;
  padding: 0.6em 0.8em;
  border:0.2px solid grey;
  font-size:1em;
}
.alt-img-info .alt-inp:focus{
  outline: 1px solid rgb(31, 64, 125);
}
.alt-img-info>.alt-info1{
  /* border: 1px solid blue; */
  height: 35%;
  padding: 4px;
  padding-top: 1em;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap:0.5em;
}
.alt-img-info>.alt-info2{ 
  height: 20%;
  display: flex;
  align-items: center;
  padding: 0.5em;
  justify-content: center;
  font-size: 1.1em;
  letter-spacing: 0.5px;
  padding-right: 0.8em;
  gap:11em;

}

.alt-info1 button{
  background-color: #006be6;
  color: white;
  border: none;
  height: 95%;
  padding: 0.01em 0.8em;
  border-radius: 8px;
  letter-spacing: 1.5px;
  font-size: 1em;

}

.toggle-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.toggle {
  width: 50px;
  height: 25px;
  padding: 0.2em;
  background-color: #ccc;
  border-radius: 25px;
  position: relative;
  transition: background 0.3s;
}

.toggle-circle {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  transition: left 0.3s;
}

.toggle.on {
  background-color: #006be6;
}

.toggle.on .toggle-circle {
  left: 32px;
}

.toggle-label {
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
    `;

  let ele = document.createElement("style");
  ele.textContent = styleContent;
  document.head.appendChild(ele);

  let container = document.querySelector(".widget2");
  container.style.display = "block";
  container.style.transform = "translateX(0%)";
  let maindiv = document.querySelector(".widget2 .main-div");
  maindiv.innerHTML = "";

  let imagesMap = new Map();
  let images = [...parentDocument.querySelectorAll("img, svg")];
  images.forEach((img, index) => {
    img.dataset.uniqueId = `img-${index}`; // Assigns a unique ID
  });

  images.forEach((img) => {
    let key = img.dataset.src || img.currentSrc || img.src;
    if (!key) return;

    if (!imagesMap.has(key)) {
      imagesMap.set(key, []);
    }
    imagesMap.get(key).push(img);
  });

  imagesMap.forEach((instances, key) => {
    instances.forEach((img) => {
      const main_box = document.createElement("div");
      main_box.classList.add("alt-changer");

      const innerSmall = document.createElement("div");
      innerSmall.classList.add("alt-img-info");
      const info1 = document.createElement("div");
      info1.classList.add("alt-info1");
      const info2 = document.createElement("div");
      info2.classList.add("alt-info2");

      let mediaElement = document.createElement("img");
      let altText = "";

      if (img.tagName.toLowerCase() === "img") {
        mediaElement.src = key;
        altText = img.getAttribute("alt") || "";
      } else if (img.tagName.toLowerCase() === "svg") {
        let serializer = new XMLSerializer();
        let svgString = serializer.serializeToString(img);
        let svgBase64 = btoa(unescape(encodeURIComponent(svgString)));
        mediaElement.src = `data:image/svg+xml;base64,${svgBase64}`;
        altText =
          img.getAttribute("aria-label") ||
          img.querySelector("title")?.textContent ||
          "";
      }

      let info1_inp = document.createElement("input");
      info1_inp.type = "text";
      info1_inp.classList.add("alt-inp");
      info1_inp.value = altText;

      let info1_bttn = document.createElement("button");
      info1_bttn.type = "button";
      info1_bttn.textContent = "Apply";
      info1_bttn.addEventListener("click", () => {
        img.setAttribute("alt", info1_inp.value);
      });

      info1.appendChild(info1_inp);
      info1.appendChild(info1_bttn);

      let p = document.createElement("p");
      p.textContent = "Decorative";

      let cont = document.createElement("div");
      cont.classList.add("toggle-container");

      let toggle = document.createElement("div");
      toggle.classList.add("toggle");

      let circle = document.createElement("div");
      circle.classList.add("toggle-circle");

      toggle.appendChild(circle);
      cont.appendChild(toggle);
      info2.appendChild(p);
      info2.appendChild(cont);

      innerSmall.appendChild(info1);
      innerSmall.appendChild(info2);
      main_box.appendChild(mediaElement);
      main_box.appendChild(innerSmall);
      maindiv.appendChild(main_box);

      decorativeOnOff();
      applyAlt();
    });
  });
}
function decorativeOnOff() {
  document.querySelectorAll(".toggle-container").forEach((toggleContainer) => {
    toggleContainer.removeEventListener("click", toggleHandler); // Prevent duplicate events
    toggleContainer.addEventListener("click", toggleHandler);
  });
}

function toggleHandler(event) {
  let toggle = event.target.closest(".toggle");
  if (!toggle) return;

  toggle.classList.toggle("on");

  let mainBox = toggle.closest(".alt-changer");
  let displayedImage = mainBox.querySelector("img");

  if (!displayedImage) {
    console.warn("❌ No image found in alt-changer");
    return;
  }

  let parentImages = [...parentDocument.querySelectorAll("img, svg")].filter(
    (img) => {
      if (img.tagName.toLowerCase() === "img") {
        return img.src === displayedImage.src;
      } else if (img.tagName.toLowerCase() === "svg") {
        let svgString = new XMLSerializer().serializeToString(img);
        let displayedSvgString = new XMLSerializer().serializeToString(
          displayedImage
        );
        return svgString === displayedSvgString;
      }
      return false;
    }
  );

  if (parentImages.length === 1) {
    let parentImage = parentImages[0];

    if (toggle.classList.contains("on")) {
      parentImage.setAttribute("aria-hidden", "true");
      console.log(`✅ Applied aria-hidden to:`, parentImage);
    } else {
      parentImage.removeAttribute("aria-hidden");
      console.log(`❌ Removed aria-hidden from:`, parentImage);
    }
  } else {
    console.warn(
      `⚠️ Multiple or no matching images found for ${displayedImage.src}`
    );
  }
}

function applyAlt() {
  document.querySelectorAll(".alt-info1 button").forEach((button) => {
    button.removeEventListener("click", applyAltHandler); // Prevent duplicate events
    button.addEventListener("click", applyAltHandler);
  });
}

function applyAltHandler(event) {
  let button = event.target;
  let mainBox = button.closest(".alt-changer");
  let displayedImage = mainBox.querySelector("img");
  let altInput = mainBox.querySelector(".alt-inp").value.trim(); // Get input value

  if (!displayedImage) {
    console.warn("❌ No image found inside .alt-changer");
    return;
  }

  let parentImages = [...parentDocument.querySelectorAll("img")].filter(
    (img) => {
      return (
        img.src === displayedImage.src &&
        img.dataset.index === displayedImage.dataset.index
      );
    }
  );

  if (parentImages.length === 1) {
    let parentImage = parentImages[0];
    parentImage.setAttribute("alt", altInput);
    console.log(`✅ Alt updated: "${altInput}" for`, parentImage);
  } else {
    console.warn(
      `⚠️ Multiple or no matching images found for ${displayedImage.src}`
    );
  }
}

// document.addEventListener('DOMContentLoaded', () => {
//     generateAltInputForm();
//     const applyButton = document.getElementById('apply-alt');
//     applyButton.addEventListener('click', applyAltToImages);
// });
