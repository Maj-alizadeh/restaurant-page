import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";
import "./style.css";

// Content container
const content = document.createElement("div");
content.classList.add("content");
document.body.appendChild(content);

// Header
const header = document.createElement("div");
header.classList.add("header");
const home = document.createElement("a");
home.innerHTML = "Home";
home.classList.add("active");
const menu = document.createElement("a");
menu.innerHTML = "Menu";
const contact = document.createElement("a");
contact.innerHTML = "Contact";

header.appendChild(home);
header.appendChild(menu);
header.appendChild(contact);

// Main Content
// const main = document.createElement("div");
// main.innerHTML = "main content";

// Footer
const footer = document.createElement("div");
footer.classList.add("footer");
footer.innerHTML = "All Rights Reserved © Site by Majed";

let main = homePage;

// const content = do cument.getElementById("content");
content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);

function linkClick(event) {
  const anchor = event.target.innerHTML;
  switch (anchor) {
    case "Home":
      content.removeChild(main);
      content.removeChild(footer);
      main = homePage;
      content.appendChild(main);
      content.appendChild(footer);
      break;
    case "Menu":
      content.removeChild(main);
      content.removeChild(footer);
      main = menuPage;
      content.appendChild(main);
      content.appendChild(footer);
      break;
    case "Contact":
      content.removeChild(main);
      content.removeChild(footer);
      main = contactPage;
      content.appendChild(main);
      content.appendChild(footer);
      break;
    default:
      main = homePage;
  }
  if (event.target.innerHTML === "menu") event.target.classList.add("active");
}

const links = document.querySelectorAll("a");
links.forEach((link) => link.addEventListener("click", linkClick));
