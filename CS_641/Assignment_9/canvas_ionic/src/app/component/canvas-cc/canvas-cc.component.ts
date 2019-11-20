import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-canvas-cc',
  templateUrl: './canvas-cc.component.html',
  styleUrls: ['./canvas-cc.component.scss'],
})
export class CanvasCCComponent implements AfterViewInit {

  @ViewChild('myCanvas', { static: false }) myCanvas: any;

  // Variables
  myCanvasContext: any;
  customWelcomeGreetingRant: boolean;

  constructor() {


  }

  ngAfterViewInit() {

    // Setting HTML elements properties in ngViewInit Method as before they are undefined
    this.myCanvas.width = window.innerWidth;
    this.myCanvas.height = window.innerHeight;
    this.myCanvasContext = this.myCanvas.nativeElement.getContext('2d');

    // Calling Canvas Code function
    this.canvasCode();

  }


  canvasCode() {
    // Defining Variables
    const myCanvasContext = this.myCanvas.nativeElement.getContext('2d');

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

      if (xAxis > innerWidth) {
        xAxis = 0;
      }

      // Using Global Variables
      myCanvasContext.fillStyle = color;
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
