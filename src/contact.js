import map from "./map.png";
import phone from "./phone.svg";
import email from "./email.svg";
import mapMarker from "./map-marker.svg";
import clock from "./clock.svg";
import "./contact.css";

export default function makeContactPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

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
  menuLi.appendChild(menuBtn);
  list.appendChild(menuLi);
  const contactLi = document.createElement("li");
  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.id = "contactBtn";
  contactBtn.style.color = "#800000";
  contactBtn.disabled = true;
  contactLi.appendChild(contactBtn);
  list.appendChild(contactLi);
  header.appendChild(list);
  content.appendChild(header);

  const main = document.createElement("div");
  main.className = "main-content";

  const contactCont = document.createElement("div");
  contactCont.className = "container";

  const phoneCont = document.createElement("div");
  phoneCont.className = "contact";
  const phoneImg = new Image();
  phoneImg.src = phone;
  phoneCont.appendChild(phoneImg);
  const phoneText = document.createElement("div");
  phoneText.textContent = "999-999-9999";
  phoneCont.appendChild(phoneText);
  contactCont.appendChild(phoneCont);

  const emailCont = document.createElement("div");
  emailCont.className = "contact";
  const emailImg = new Image();
  emailImg.src = email;
  emailCont.appendChild(emailImg);
  const emailText = document.createElement("div");
  emailText.textContent = "fakeemail@fake.com";
  emailCont.appendChild(emailText);
  contactCont.appendChild(emailCont);

  const addressCont = document.createElement("div");
  addressCont.className = "contact";
  const addressImg = new Image();
  addressImg.src = mapMarker;
  addressCont.appendChild(addressImg);
  const addressText = document.createElement("div");
  addressText.textContent = "2210 Paris Rd, Columbia, MO 65202";
  addressCont.appendChild(addressText);
  contactCont.appendChild(addressCont);

  const timeCont = document.createElement("div");
  timeCont.className = "contact";
  const timeImg = new Image();
  timeImg.src = clock;
  timeCont.appendChild(timeImg);
  const timeText = document.createElement("div");
  timeText.textContent = "Mon-Fri: 8:00am-5:00pm";
  timeCont.appendChild(timeText);
  contactCont.appendChild(timeCont);

  main.appendChild(contactCont);

  const mapImg = new Image();
  mapImg.className = "map";
  mapImg.src = map;

  main.appendChild(mapImg);
  content.appendChild(main);
}
