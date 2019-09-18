window.onload = init;

// I could remove these comments but choose to not for easy debugging
// Variables declaration
var isLightMode = true;
var paraTextID;
var gamesFontSize;
var cardHover;

// Learned new thing about DOM not initialize at first.
// Initialization
function init() {
  paraTextID = document.getElementById("paraText");

  // converting the retrieved font-size to float for easy calculations
  gamesFontSize = parseFloat(
    window.getComputedStyle(paraTextID, null).getPropertyValue("font-size")
  );

  // Tried to randomize the variable for going up or down depending on different mouse control.
  // Algo - Create an event to watch hover start and end &
  // then randomize the number ranging from -50 to 50 for moving the card up or down.

  /*
  cardHover = -200;
  let root = document.documentElement;
  root.style.setAttribute('--randomAxis', cardHover + "px");

  cardHover = document.getElementsByClassName("card")
  document
    .getElementsByClassName("card")
    .style.setAttribute("--randomAxis", "-100px");
   = "var(--randomAxis) = -10px";
  */
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

  document.getElementById("paraText").style.color = "green";

  document.getElementById("currTextSize").innerHTML =
    "Current Font size : " + gamesFontSize;
}
