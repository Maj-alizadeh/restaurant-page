import restaurantImage from "./images/home-image.jpg";
import { elementCreator } from "./contact";

function homePage() {
  const main = elementCreator("div", "", "main");
  const slogan = elementCreator(
    "p",
    "Test us one time, Be customer always \n Best burgers in the world"
  );
  const homeImage = elementCreator("img", "", "home-image");
  homeImage.src = restaurantImage;
  const welcome = elementCreator("p", "Welcome", "welcome");

  main.appendChild(slogan);
  main.appendChild(homeImage);
  main.appendChild(welcome);

  return main;
}
export default homePage();
