import locationIcon from "./map-marker.svg";
import timeIcon from "./clock.svg";
import "./home.css";

export default function makeHomePage() {
  const headingText = "Italian Town";
  const descriptionText =
    "Welcome to Italian Town, where culinary excellence and passion come together to create a truly magnificent dining experience. As you step inside, you are immediately embraced by the warm, inviting ambiance that sets the stage for a memorable journey of flavors and aromas.";

  const content = document.getElementById("content");
  content.innerHTML = "";

  const header = document.createElement("div");
  header.className = "header";
  const heading = document.createElement("h1");
  heading.textContent = headingText;
  const list = document.createElement("ul");
  const homeLi = document.createElement("li");
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.id = "homeBtn";
  homeBtn.style.color = "#800000";
  homeBtn.disabled = true;
  homeLi.appendChild(homeBtn);
  list.appendChild(homeLi);
  const menuLi = document.createElement("li");
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.id = "menuBtn";
  menuLi.appendChild(menuBtn);
  list.appendChild(menuLi);
  const contactLi = document.createElement("li");
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.id = "contactBtn";
  contactLi.appendChild(contactBtn);
  list.appendChild(contactLi);

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
  introFooter.className = "intro-footer";

  const location = document.createElement("div");
  location.className = "location";
  const locationImage = new Image();
  locationImage.src = locationIcon;
  location.appendChild(locationImage);
  const locationInfo = document.createElement("div");
  locationInfo.textContent = "2210 Paris Rd, Columbia, MO 65202";
  location.appendChild(locationInfo);
  introFooter.appendChild(location);

  const time = document.createElement("div");
  time.className = "time";
  const timeImage = new Image();
  timeImage.src = timeIcon;
  time.appendChild(timeImage);
  const timeInfo = document.createElement("div");
  timeInfo.textContent = "Mon-Fri: 8:00am-5:00pm";
  time.appendChild(timeInfo);
  introFooter.appendChild(time);
  intro.appendChild(introFooter);

  content.appendChild(intro);
}
