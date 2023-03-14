import homePage from "./home";
import "./style.css";

// Header
const header = document.createElement("div");
header.classList.add("header");
const home = document.createElement("a");
home.innerHTML = "Home";
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
footer.innerHTML = "All Rights Reserved © Site by Majed";

const content = document.getElementById("content");
content.appendChild(header);
content.appendChild(homePage);
content.appendChild(footer);
