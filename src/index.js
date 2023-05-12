import makeHomePage from "./home-page";
import makeMenuPage from "./menu";
import makeContactPage from "./contact";

function eventListen() {
  const homeBtnIndex = document.querySelector("#homeBtn");
  homeBtnIndex.addEventListener("click", () => {
    makeHomePage();
    eventListen();
  });

  const menuBtnIndex = document.querySelector("#menuBtn");
  menuBtnIndex.addEventListener("click", () => {
    makeMenuPage();
    eventListen();
  });

  const contactBtnIndex = document.querySelector("#contactBtn");
  contactBtnIndex.addEventListener("click", () => {
    makeContactPage();
    eventListen();
  });
}

makeHomePage();
eventListen();
