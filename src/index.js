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
const rightSection = document.createElement("div");
const restaurantName = document.createElement("p");
restaurantName.innerText = "My Restaurant";
rightSection.appendChild(restaurantName);

const middleSection = document.createElement("div");
const home = document.createElement("a");
home.innerHTML = "Home";
// home.classList.add("active");
const menu = document.createElement("a");
menu.innerHTML = "Menu";
const contact = document.createElement("a");
contact.innerHTML = "Contact";

let activeTab = home;
activeTab.classList.add("active");

middleSection.appendChild(home);
middleSection.appendChild(menu);
middleSection.appendChild(contact);

header.appendChild(rightSection);
header.appendChild(middleSection);
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
