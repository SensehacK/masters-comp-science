// Defining Variables
let myCanvas = document.getElementById('myCanvas');
let myCanvasContext = myCanvas.getContext("2d");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

// Setting up constants
const canvasWidth = 15;
const repeatPattern = (window.innerWidth) / canvasWidth;

// Setting Variables.
let colorArr = ['red', 'blue', 'green', 'gray', 'orange', 'black', 'teal', 'purple'];
var xAxis = 0;
var yAxis = 0;
var dateObj = new Date();
console.log("Hello setting vars");
console.log(dateObj);
console.log("The time before init ", dateObj.getMilliseconds());




function init() {
    console.log("In init func");
    console.log("Now date ", Date.now());
    console.log(dateObj);
    var dateObj2 = new Date();

    console.log("The time it loaded at ", dateObj2.getMilliseconds());
    console.log("difference in time ", dateObj2 - dateObj);


    // For loop for the whole screen dynamically generated
    for (let i = 0; i < repeatPattern; i++) {
        // Main Color
        canvasDraw(colorArr[i % 8], xAxis);
        // Background Color
        canvasDraw("aqua", xAxis);
    }

}



// Function for drawing the rectangle
function canvasDraw(color) {
    myCanvasContext.fillStyle = color;
    // Using Global Variables
    myCanvasContext.fillRect(xAxis, yAxis, canvasWidth, window.innerHeight);
    // Adding X - axis with respect to width between each rectangle
    xAxis = xAxis + canvasWidth;
}

console.log("Hello for loop");