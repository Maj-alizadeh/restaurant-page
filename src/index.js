import homePage from "./home";
import menuPage from "./menu";
import contactPage, { elementCreator } from "./contact";
import "./style.css";

// Content container
const content = elementCreator("div", "", "content");
document.body.appendChild(content);

// Header
const header = elementCreator("div", "", "header");
const rightSection = document.createElement("div");
const restaurantName = elementCreator("p", "My Restaurant");
rightSection.appendChild(restaurantName);
const middleSection = document.createElement("div");
const home = elementCreator("a", "Home");
const menu = elementCreator("a", "Menu");
const contact = elementCreator("a", "Contact");

let activeTab = home;
activeTab.classList.add("active");

middleSection.appendChild(home);
middleSection.appendChild(menu);
middleSection.appendChild(contact);

header.appendChild(rightSection);
header.appendChild(middleSection);

// Footer
const footer = elementCreator(
  "div",
  "All Rights Reserved © Site by Majed",
  "footer"
);

let main = homePage;
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
      activeTab.classList.remove("active");
      activeTab = home;
      activeTab.classList.add("active");
      content.appendChild(main);
      content.appendChild(footer);
      break;
    case "Menu":
      content.removeChild(main);
      content.removeChild(footer);
      main = menuPage;
      activeTab.classList.remove("active");
      activeTab = menu;
      activeTab.classList.add("active");
      content.appendChild(main);
      content.appendChild(footer);
      break;
    case "Contact":
      content.removeChild(main);
      content.removeChild(footer);
      main = contactPage;
      activeTab.classList.remove("active");
      activeTab = contact;
      activeTab.classList.add("active");
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
