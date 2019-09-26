let myDiv = document.getElementById('myDiv');
let mySecDiv = document.getElementById("movePara")
// document.addEventListener("mousemove", custMovedMouse);

// function custMovedMouse() {
//     console.log("In youMoved Custom Mouse.");

// }

document.addEventListener("mousemove", custMoveDivPara);

function custMoveDivPara(event) {

    // mySecDiv.addEventListener()
    console.log('Hello', event.clientX, event.clientY);

    mySecDiv.style.left = event.clientX + "px";
    mySecDiv.style.top = event.clientY + "px";

    // mySecDiv.style.clientY = event.clientY;


}