import burger from "./images/burger1.png";
import { elementCreator } from "./contact";

function createFood(foodName, description, imageUrl, price) {
  const foodContainer = elementCreator("div", "", "food-container");
  const imageContianer = new Image();
  imageContianer.classList.add("image-container");
  imageContianer.src = imageUrl;

  const foodNameElement = elementCreator("p", foodName);
  const descriptionElement = elementCreator("p", description);
  const priceElement = elementCreator("p", price);

  foodContainer.appendChild(imageContianer);
  foodContainer.appendChild(foodNameElement);
  foodContainer.appendChild(descriptionElement);
  foodContainer.appendChild(priceElement);

  return foodContainer;
}

function menuPage() {
  const menu = elementCreator("div", "", "menu");
  menu.appendChild(createFood("Burger", "meat, onion, cheesse", burger, "10$"));
  menu.appendChild(createFood("Burger", "meat, onion, cheesse", burger, "10$"));
  menu.appendChild(createFood("Burger", "meat, onion, cheesse", burger, "10$"));
  menu.appendChild(createFood("Burger", "meat, onion, cheesse", burger, "10$"));
  menu.appendChild(createFood("Burger", "meat, onion, cheesse", burger, "10$"));
  menu.appendChild(createFood("Burger", "meat, onion, cheesse", burger, "10$"));

  return menu;
}

export default menuPage();
