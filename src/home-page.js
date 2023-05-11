import image from "./pizza.jpeg";

export default function makeHomePage() {
  const headingText = "Italian Town";
  const descriptionText =
    "Welcome to Italian Town, where culinary excellence and passion come together to create a truly magnificent dining experience. As you step inside, you are immediately embraced by the warm, inviting ambiance that sets the stage for a memorable journey of flavors and aromas.";

  const content = document.getElementById("content");

  const header = document.createElement("div");
  header.className = "header";
  const heading = document.createElement("h1");
  heading.textContent = headingText;
  const list = document.createElement("ul");
  const homeLi = document.createElement("li");
  const homeBtn = document.createElement("button");
  homeBtn.id = "homeBtn";
  homeBtn.textContent = "Home";
  homeLi.appendChild(homeBtn);
  list.appendChild(homeLi);
  const menuLi = document.createElement("li");
  const menuBtn = document.createElement("button");
  menuBtn.id = "homeBtn";
  menuBtn.textContent = "Menu";
  menuLi.appendChild(menuBtn);
  list.appendChild(menuLi);
  const contactLi = document.createElement("li");
  const contactBtn = document.createElement("button");
  contactBtn.id = "homeBtn";
  contactBtn.textContent = "Contact";
  contactLi.appendChild(contactBtn);
  list.appendChild(contactBtn);

  header.appendChild(heading);
  header.appendChild(list);

  content.appendChild(header);

  const intro = document.createElement("div");
  intro.className = "intro";
  const description = document.createElement("p");
  description.textContent = descriptionText;
  intro.appendChild(description);

  const orderBtn = document.createElement("button");
  orderBtn.textContent = "Order Now";
  intro.appendChild(orderBtn);

  const introFooter = document.createElement("div");
}
