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

let main = document.createElement("div");
main.appendChild(homePage);
content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);

// Hilight the active tab
function makeTabActive(tab) {
  activeTab.classList.remove("active");
  if (tab === "Home") activeTab = home;
  else if (tab === "Menu") activeTab = menu;
  else if (tab === "Contact") activeTab = contact;
  activeTab.classList.add("active");
}

// Change tab on anchor click
function linkClick(event) {
  const anchor = event.target.innerHTML;
  switch (anchor) {
    case "Home":
      main.innerHTML = "";
      main.appendChild(homePage);
      makeTabActive(anchor);
      break;
    case "Menu":
      main.innerHTML = "";
      main.appendChild(menuPage);
      makeTabActive(anchor);
      break;
    case "Contact":
      main.innerHTML = "";
      main.appendChild(contactPage);
      makeTabActive(anchor);
      break;
    default:
      main = homePage;
  }
}

const links = document.querySelectorAll("a");
links.forEach((link) => link.addEventListener("click", linkClick));
