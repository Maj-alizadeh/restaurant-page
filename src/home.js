import restaurantImage from "./images/home-image.jpg";

function homePage() {
  const main = document.createElement("div");
  main.classList.add("main");
  const slogan = document.createElement("p");
  slogan.innerText =
    "Test us one time, Be customer always \n Best burgers in the world";
  const homeImage = new Image();
  homeImage.src = restaurantImage;
  homeImage.classList.add("home-image");
  const welcome = document.createElement("p");
  welcome.innerText = "Welcome";
  welcome.classList.add("welcome");

  main.appendChild(slogan);
  main.appendChild(homeImage);
  main.appendChild(welcome);

  return main;
}
export default homePage();
