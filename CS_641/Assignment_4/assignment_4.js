// Defining Variables
let myCanvasContext = myCanvas.getContext("2d");
let myCanvas = document.getElementById('myCanvas');
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

// Setting up constants
const canvasWidth = 15;
const repeatPattern = (window.innerWidth) / canvasWidth;

// Setting Variables.
let colorArr = ['red', 'blue', 'green', 'gray', 'orange', 'black', 'teal', 'purple'];
var xAxis = 0;
var yAxis = 0;




// Function for drawing the rectangle
function canvasDraw(color) {
    myCanvasContext.fillStyle = color;
    // Using Global Variables
    myCanvasContext.fillRect(xAxis, yAxis, canvasWidth, window.innerHeight);
    // Adding X - axis with respect to width between each rectangle
    xAxis = xAxis + canvasWidth;
}

// For loop for the whole screen dynamically generated
for (let i = 0; i < repeatPattern; i++) {
    // Main Color
    canvasDraw(colorArr[i % 8], xAxis);
    // Background Color
    canvasDraw("aqua", xAxis);
}