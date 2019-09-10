var isLightMode = true;
var paraTextID = document.getElementById("paraText");
var gamesID = document.getElementById("games");
var gamesFontSize = window
  .getComputedStyle(paraTextID, null)
  .getPropertyValue("font-size");

function darkMode() {
  console.log("Hello Sensehack!");

  document.documentElement.setAttribute("theme", "DarkMode");
  isLightMode = !isLightMode;

  if (isLightMode) {
    document.documentElement.setAttribute("theme", "LightMode");
  }
}

function biggerSize() {
  console.log("Yo Sense", gamesFontSize);
  gamesFontSize += 2;
  gamesID.style.fontSize = gamesFontSize;
  //   document.documentElement.setAttribute("h2");
}
