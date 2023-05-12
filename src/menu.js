import pepperoniPizza from "./pepperoni-pizza.jpg";
import supremePizza from "./supreme-pizza.jpg";
import saladPic from "./salad.jpg";
import spaghettiPic from "./spaghetti.jpg";
import "./menu.css";

export default function makeMenuPage() {
  const content = document.getElementById("content");

  const header = document.createElement("div");
  header.className = "header";
  const heading = document.createElement("h1");
  heading.textContent = "Italian Town";
  header.appendChild(heading);
  const list = document.createElement("ul");
  const homeLi = document.createElement("li");
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.id = "homeBtn";
  homeLi.appendChild(homeBtn);
  list.appendChild(homeLi);
  const menuLi = document.createElement("li");
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.id = "menuBtn";
  menuBtn.style.color = "#800000";
  menuBtn.disabled = true;
  menuLi.appendChild(menuBtn);
  list.appendChild(menuLi);
  const contactLi = document.createElement("li");
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.id = "contactBtn";
  contactLi.appendChild(contactBtn);
  list.appendChild(contactLi);
  header.appendChild(list);
  content.appendChild(header);

  const menu = document.createElement("div");
  menu.className = "menu";
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Menu";
  menu.appendChild(menuTitle);

  const pepperoniCont = document.createElement("div");
  pepperoniCont.className = "food-container";
  const pepperoniTitle = document.createElement("h3");
  pepperoniTitle.textContent = "Pepperoni Pizza";
  pepperoniCont.appendChild(pepperoniTitle);
  const pepperoniText = document.createElement("p");
  pepperoniText.textContent =
    "Indulge in the irresistible flavors of our signature Pepperoni Pleasure Pizza. Crafted with passion and precision, this classic favorite is sure to satisfy your cravings and leave you longing for more.";
  pepperoniCont.appendChild(pepperoniText);
  const pizzaImage = new Image();
  pizzaImage.src = pepperoniPizza;
  pepperoniCont.appendChild(pizzaImage);
  menu.appendChild(pepperoniCont);

  const supremeCont = document.createElement("div");
  supremeCont.className = "food-container";
  const supremeTitle = document.createElement("h3");
  supremeTitle.textContent = "Supreme Pizza";
  supremeCont.appendChild(supremeTitle);
  const supremeText = document.createElement("p");
  supremeText.textContent =
    "Indulge in the irresistible flavors of our signature Pepperoni Pleasure Pizza. Crafted with passion and precision, this classic favorite is sure to satisfy your cravings and leave you longing for more.";
  supremeCont.appendChild(supremeText);
  const supremeImage = new Image();
  supremeImage.src = supremePizza;
  supremeCont.appendChild(supremeImage);
  menu.appendChild(supremeCont);

  const spaghettiCont = document.createElement("div");
  spaghettiCont.className = "food-container";
  const spaghettiTitle = document.createElement("h3");
  spaghettiTitle.textContent = "Spaghetti";
  spaghettiCont.appendChild(spaghettiTitle);
  const spaghettiText = document.createElement("p");
  spaghettiText.textContent =
    "Embark on a journey of hearty Italian flavors with our Classic Spaghetti Bolognese. Crafted with passion and authenticity, this timeless dish combines al dente spaghetti with a robust meat sauce that will transport you straight to the heart of Italy.";
  spaghettiCont.appendChild(spaghettiText);
  const spaghettiImage = new Image();
  spaghettiImage.src = spaghettiPic;
  spaghettiCont.appendChild(spaghettiImage);
  menu.appendChild(spaghettiCont);

  const saladCont = document.createElement("div");
  saladCont.className = "food-container";
  const saladTitle = document.createElement("h3");
  saladTitle.textContent = "Salad";
  saladCont.appendChild(saladTitle);
  const saladText = document.createElement("p");
  saladText.textContent =
    "Revitalize your palate with the vibrant flavors and crisp textures of our Fresh Garden Salad. Created with an assortment of farm-fresh ingredients, this salad is a refreshing and nutritious option that will leave you feeling revitalized and satisfied.";
  saladCont.appendChild(saladText);
  const saladImage = new Image();
  saladImage.src = saladPic;
  saladCont.appendChild(saladImage);
  menu.appendChild(saladCont);

  content.appendChild(menu);
}
