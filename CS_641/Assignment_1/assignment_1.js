var isLightMode = true;

function darkMode() {
  console.log("Hello Sensehack!");

  document.documentElement.setAttribute("theme", "DarkMode");
  isLightMode = !isLightMode;

  if (isLightMode) {
    document.documentElement.setAttribute("theme", "LightMode");
  }
}

function darkMode2() {
  console.log("Yo Sense");

//   document.documentElement.setAttribute("h2");
}
