import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-cc',
  templateUrl: './canvas-cc.component.html',
  styleUrls: ['./canvas-cc.component.scss'],
})
export class CanvasCCComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.canvasCode();
  }

  ionViewWillEnter() {
    console.log('In ion view will enter');
    this.canvasCode();
  }

  canvasCode() {
    // Defining Variables
    const myCanvas = document.getElementById('myCanvas');
    const myCanvasContext = myCanvas.getContext('2d');
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;

    console.log(myCanvas);


    // Setting up constants
    const canvasWidth = 15;
    const repeatPattern = (window.innerWidth) / canvasWidth;

    // Setting Variables.
    const colorArr = ['red', 'blue', 'green', 'gray', 'orange', 'black', 'teal', 'purple'];
    let xAxis = 0;
    let yAxis = 0;

    // Calling init function
    init();

    function init() {

      console.log('In init func');

      // For loop for the whole screen dynamically generated
      for (let i = 0; i < repeatPattern; i++) {
        // Main Color
        canvasDraw(colorArr[i % 8], xAxis);
        // Background Color
        canvasDraw('aqua', xAxis);
      }

      xAxis = 0;
      yAxis = 0;
      window.addEventListener('devicemotion', handleMotionEvent, true);

    }


    // Function for drawing the rectangle
    function canvasDraw(color, direction) {
      console.log('In canvas Draw');

      if (xAxis > innerWidth) {
        xAxis = 0;
      }

      // myCanvasContext.clearRect(xAxis, yAxis, canvasWidth - 10, innerHeight);
      myCanvasContext.fillStyle = color;

      // Using Global Variables
      myCanvasContext.fillRect(xAxis, yAxis, canvasWidth, window.innerHeight);

      xAxis = xAxis + canvasWidth;

    }

    // Animation function
    function handleMotionEvent(event) {

      // Resetting the xAxis when reached its limit of Window width
      if (xAxis > innerWidth) {
        xAxis = 0;
      }

      // Getting Accelerometer X & Y axis
      const x = event.accelerationIncludingGravity.x;
      const y = event.accelerationIncludingGravity.y;

      if ((x > 1 && x < 3) || (x < -1 && x > -3)) {

        console.log('printing x greater or smaller than 1 ', x);

        xAxis = (x > 1) ? xAxis + (x * 0.05) : xAxis - (x * 0.05);
        // Y- axis could be utilized but it doesn't translate well with the animation.
        // yAxis = (y > 1) ? yAxis + (y * 0.05) : yAxis - (y * 0.05);

        // For loop for the whole screen dynamically generated
        for (let i = 0; i < repeatPattern; i++) {
          // Main Color
          canvasDraw(colorArr[i % 8], xAxis);
          // Background Color
          canvasDraw('aqua', xAxis);
        }
      }

      if (x > 3 || x < -3) {

        console.log('printing x greater or smaller than 3 ', x);

        xAxis = (x > 3) ? xAxis + (x * 0.3) : xAxis - (x * 0.3);

        for (let i = 0; i < repeatPattern; i++) {
          // Main Color
          canvasDraw(colorArr[i % 8], xAxis);
          // Background Color
          canvasDraw('aqua', xAxis);
        }
      }

    }

    console.log('Hello for loop');
  }

}
