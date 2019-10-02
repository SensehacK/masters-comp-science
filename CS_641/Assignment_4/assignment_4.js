let myCanvas = document.getElementById('myCanvas');
// myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

let myCanvasContext = myCanvas.getContext("2d");
color = [022, 123, 045];
colorArr = ['red', 'blue', 'green', 'gray', 'orange', 'royalblue', 'teal', 'purple', 'red', 'blue', 'green', 'gray', 'orange', 'royalblue', 'teal', 'purple'];
const canvasWidth = 15;
xAxis = 0;
repeatPattern = (window.innerWidth) / canvasWidth;

// Drawing the Rectangle
function canvasDraw(color, x) {
    console.log("Hi in func Canvas Draw");
    // myCanvasContext.fillStyle = "green";
    myCanvasContext.fillStyle = color;
    y = 20;
    // x = x + 20;
    myCanvasContext.fillRect(x, y, 15, window.innerHeight);
    // myCanvasContext.fillStyle = "white";

    // myCanvasContext.fillRect(x + 30, y, 20, window.innerHeight);
    xAxis = xAxis + canvasWidth;
}


console.log("calling the for Loop");

console.log((window.innerWidth) / 50);

for (let i = 0; i < repeatPattern; i++) {
    // const element = array[index];

    canvasDraw(colorArr[i], xAxis);

    // xAxis = xAxis + canvasWidth;

    canvasDraw("aqua", xAxis);
}