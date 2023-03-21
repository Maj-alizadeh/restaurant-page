import burger from "./images/burger1.png";

function createFood(foodName, description, imageUrl, price) {
  const foodContainer = document.createElement("div");
  foodContainer.classList.add("food-container");
  const imageContaner = new Image();
  imageContaner.classList.add("image-container");
  imageContaner.src = imageUrl;

  const foodNameElement = document.createElement("p");
  foodNameElement.innerText = foodName;
  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = description;

  const priceElement = document.createElement("p");
  priceElement.innerText = price;

  foodContainer.appendChild(imageContaner);
  foodContainer.appendChild(foodNameElement);
  foodContainer.appendChild(descriptionElement);
  foodContainer.appendChild(priceElement);

  return foodContainer;
}

function menuPage() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild(createFood("Burger", "meat, onion, cheesse", burger, "10$"));
  menu.appendChild(createFood("Burger", "meat, onion, cheesse", burger, "10$"));
  menu.appendChild(createFood("Burger", "meat, onion, cheesse", burger, "10$"));
  menu.appendChild(createFood("Burger", "meat, onion, cheesse", burger, "10$"));
  menu.appendChild(createFood("Burger", "meat, onion, cheesse", burger, "10$"));
  menu.appendChild(createFood("Burger", "meat, onion, cheesse", burger, "10$"));

  return menu;
}

export default menuPage();
