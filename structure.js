export default class Structure {
  constructor() {
    this.childs = [
      ...window.parent.document.body.querySelectorAll(
        "header,aside,main,footer,body>section,body>h1,body>h2,body>h3,body>h4,body>h5,body>h6"
      ),
    ];
    if (this.childs.length === 0)
      this.childs = [
        ...window.parent.document.body.querySelectorAll(
          "body>div,body>section,body>h1,body>h2,body>h3,body>h4,body>h5,body>h6"
        ),
      ];
  }

  Struc() {
    let html = document.createElement("div");
    html.style.padding = "50px";
    html.style.backgroundColor = "white";
    html.style.width = "100%";
    html.style.height = "100%";
    html.style.overflow = "auto";
    this.childs.forEach((ele) => {
      if (
        ele.tagName &&
        ele.tagName !== "SCRIPT" &&
        ele.tagName !== "SCRIPT" &&
        ele.tagName !== "NOSCRIPT" &&
        ele.tagName !== "STYLE"
      ) {
        let child = ele.querySelectorAll("h1 , h2 , h3, h4, h5, h6");
        let c = this.createParent(child, ele);
        if (c) html.appendChild(c);
      }
    });

    return html;

  }

  createParent(child, ele) {
    let div = document.createElement("div");
    div.style.boxShadow = "2px 2px 12px rgba(0, 0, 0, 0.39)";
    div.style.borderRadius = "8px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.margin = "5px";
    div.style.padding = "5px";

    if (child.length === 0) {
      this.appending(ele, div);
      return null;
    }

    this.appending(ele, div);
    child.forEach((el) => {
      if (!this.childs.includes(el)) {
        this.appending(el, div, true);
      }
    });
    return div;
  }

  appending(ele, div, isTrue) {
    let div2 = document.createElement("div");
    div2.style.display = "flex";
    div2.style.alignItems = "center";

    let img = document.createElement("img");
    if (isTrue) div2.style.marginLeft = "10px";
    img.setAttribute("src", `./icons/${ele.tagName.toLowerCase()==="section"?"div":ele.tagName.toLowerCase()}.svg`);
    img.setAttribute(
      "alt",
      `The image tell about the content of iframe which contain ${ele.tagName}`
    );
    img.style.width = "40px";
    img.style.padding = "4px";
    if (!this.isElementHidden(ele)) {
        div2.style.cursor = "pointer";
        div2.addEventListener("click", () => {
            let html = document.querySelector('.structure-widget');
            document.body.removeChild(html);
            ele.scrollIntoView({ behavior: "smooth", block: "center" });
            ele.style.border = "1px solid red"; // Scrolls to input
            setTimeout(() => {
                document.body.appendChild(html);
                ele.style.border = "none";
            }, 5000);
        });
    }else{
        div2.style.opacity = 0.6;
    }

    div2.appendChild(img);
    if (ele.tagName.slice(0, 1) == "H" && ele.tagName != "HEADER") {
      img.insertAdjacentText("afterend", ele.textContent);
    } else {
      img.insertAdjacentText("afterend","Container");
    }
    div.appendChild(div2);
  }

  isElementHidden(element) {
    if (!element) {
      console.log("Element does not exist.");
      return true; // If the element doesn't exist, consider it hidden.
    }
    const rect = element.getBoundingClientRect();

    if (rect.width === 0 && rect.height === 0) {
      // console.log("Element has width: 0 and height: 0. Possible reasons:");
      // Checking if any parent has `display: none`
      let parent = element.parentElement;
      while (parent) {
        if (window.getComputedStyle(parent).display === "none") {
          return true; // If any parent is hidden, the element is also hidden.
        }
        parent = parent.parentElement;
      }

      return true; // If width/height is 0, consider it hidden.
    }

    // console.log("✅ The element is visible.");
    return false;
  }
}
