let clickCount = 0;
const featureDiv = document.querySelector("#lineHeight");
const featureText = document.querySelector("#lineHeightText");
const parentDocument = window.parent.document;
const choices = [1.75, 2, 2.5];
const lineHeightIcons = [`<svg style="width:4.4em;" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 47 19"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3.94487862 2.71042226V16.7104223"/><path fill="currentColor" d="m.11302135 14.5270412 3.44487862 4.2104072c.17486379.2137224.48987514.2452235.70359754.0703597a.4999988.4999988 0 0 0 .07035976-.0703597l3.44487862-4.2104072c.17486378-.2137225.14336265-.5287338-.07035976-.7035976-.08933106-.073089-.20119771-.1130213-.31661889-.1130213H.5c-.27614237 0-.5.2238576-.5.5 0 .1154211.0399323.2272878.11302135.3166189Zm0-10.1332381L3.55789997.18339592c.17486379-.21372241.48987514-.24522355.70359754-.07035976a.49999975.49999975 0 0 1 .07035976.07035976l3.44487862 4.2104072c.17486378.2137224.14336265.52873375-.07035976.70359754-.08933106.07308905-.20119771.11302135-.31661889.11302135H.5c-.27614237 0-.5-.22385762-.5-.5 0-.11542118.0399323-.22728783.11302135-.3166189Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.4448786 1.71042226h30m-30 5h30m-30 5.00000004h30m-30 5h24"/></g></svg>`,`<svg style="width:4.4em;" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 47 23"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3.94487862 2.71042226V20.7104223"/><path fill="currentColor" d="m.11302135 18.5270412 3.44487862 4.2104072c.17486379.2137224.48987514.2452235.70359754.0703597a.4999988.4999988 0 0 0 .07035976-.0703597l3.44487862-4.2104072c.17486378-.2137225.14336265-.5287338-.07035976-.7035976-.08933106-.073089-.20119771-.1130213-.31661889-.1130213H.5c-.27614237 0-.5.2238576-.5.5 0 .1154211.0399323.2272878.11302135.3166189Zm0-14.1332381L3.55789997.18339592c.17486379-.21372241.48987514-.24522355.70359754-.07035976a.49999975.49999975 0 0 1 .07035976.07035976l3.44487862 4.2104072c.17486378.2137224.14336265.52873375-.07035976.70359754-.08933106.07308905-.20119771.11302135-.31661889.11302135H.5c-.27614237 0-.5-.22385762-.5-.5 0-.11542118.0399323-.22728783.11302135-.3166189Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.4448786 1.71042226h30m-30 6h30m-30 6.00000004h30m-30 6h24"/></g></svg>`,
`<svg style="width:4.4em;" xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 47 25"><g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3.94487862 2.71042226V22.7104223"/><path fill="currentColor" d="m.11302135 20.5270412 3.44487862 4.2104072c.17486379.2137224.48987514.2452235.70359754.0703597a.4999988.4999988 0 0 0 .07035976-.0703597l3.44487862-4.2104072c.17486378-.2137225.14336265-.5287338-.07035976-.7035976-.08933106-.073089-.20119771-.1130213-.31661889-.1130213H.5c-.27614237 0-.5.2238576-.5.5 0 .1154211.0399323.2272878.11302135.3166189Zm0-16.1332381L3.55789997.18339592c.17486379-.21372241.48987514-.24522355.70359754-.07035976a.49999975.49999975 0 0 1 .07035976.07035976l3.44487862 4.2104072c.17486378.2137224.14336265.52873375-.07035976.70359754-.08933106.07308905-.20119771.11302135-.31661889.11302135H.5c-.27614237 0-.5-.22385762-.5-.5 0-.11542118.0399323-.22728783.11302135-.3166189Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.4448786 1.71042226h30m-30 7h30m-30 7.00000004h30m-30 7h24"/></g></svg>`]
let iconDiv = document.querySelector(".line-height-icon")

export default function increaseLineHeight() {
  clickCount++;
  const elements = parentDocument.querySelectorAll("body *:not(iframe)");
  featureDiv.classList.add("selected");

  if (clickCount <= 3) {
    document.querySelector("#lineHeight .option-total").style.display = "flex";
    document.querySelector(`#lineHeight .option${clickCount}`).classList.add("selected");
    document.querySelector("#lineHeight .tick-check").style.display = "block";
    iconDiv.innerHTML = lineHeightIcons[clickCount - 1];
    elements.forEach((element) => {
      const newLineHeight = choices[clickCount - 1];
      featureText.innerText = `Line Height (${newLineHeight}x)`;
      element.style.setProperty("line-height", newLineHeight, "important");
    });
  } else {
    resetStyles();
  }
  function resetStyles() {
    iconDiv.innerHTML = `<svg
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
                  d="M22,6.5v2a1,1,0,0,1-2,0v-1H17v9h2a1,1,0,0,1,0,2H13a1,1,0,0,1,0-2h2v-9H12v1a1,1,0,0,1-2,0v-2a1,1,0,0,1,1-1H21A1,1,0,0,1,22,6.5ZM7.293,5.707A1,1,0,0,0,8.707,4.293l-3-3a1,1,0,0,0-1.414,0l-3,3A1,1,0,0,0,2.707,5.707L4,4.414V19.586L2.707,18.293a1,1,0,0,0-1.414,1.414l3,3a1,1,0,0,0,1.414,0l3-3a1,1,0,0,0-1.414-1.414L6,19.586V4.414Z"
                ></path>
              </g>
            </svg>`
    document.querySelector("#lineHeight .tick-check").style.display = "none";
    document.querySelector("#lineHeight .option-total").style.display = "none";
    for (let index = 1; index < 4; index++) {
    document.querySelector(`#lineHeight .option${index}`).classList.remove("selected")
    }
    featureText.innerText = `Line Height`;
    featureDiv.classList.remove("selected");
    elements.forEach((element) => {
      element.style.removeProperty("line-height");
    });
    clickCount = 0;
  }
  return { resetStyles };
}
