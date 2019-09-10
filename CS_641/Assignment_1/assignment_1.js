window.onload = init;

// I could remove these comments but choose to not for easy debugging
// Variables declaration
var isLightMode = true;
var paraTextID;
var gamesFontSize;

// Learned new thing about DOM not initialize at first.
// Initialization
function init() {
  paraTextID = document.getElementById("paraText");

  // converting the retrieved font-size to float for easy calculations
  gamesFontSize = parseFloat(
    window.getComputedStyle(paraTextID, null).getPropertyValue("font-size")
  );
}

// Dark Mode toggle
function darkMode() {
  console.log("Hello Sensehack!");

  document.documentElement.setAttribute("theme", "DarkMode");
  isLightMode = !isLightMode;

  if (isLightMode) {
    document.documentElement.setAttribute("theme", "LightMode");
  }
}

// Making the elements bigger depending on current size.
function biggerSize() {
  console.log("Debug Sense", gamesFontSize);
  gamesFontSize += 2;
  paraTextID.style.fontSize = gamesFontSize + "px";
}
