// Create the canvas element
var canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Get the 2D rendering context
var ctx = canvas.getContext("2d");

// Variables to track the tearing effect
var isTearing = false;
var lastX, lastY;

// Function to handle mouse events
function handleMouse(event) {
  var x = event.clientX;
  var y = event.clientY;
  
  if (event.type === "mousedown") {
    isTearing = true;
    lastX = x;
    lastY = y;
  } else if (event.type === "mouseup") {
    isTearing = false;
  } else if (event.type === "mousemove") {
    if (isTearing) {
      ctx.clearRect(x, y, 10, 10); // Clear a small area around the mouse
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(lastX, lastY);
      ctx.lineWidth = 5;
      ctx.strokeStyle = "white";
      ctx.stroke();
      lastX = x;
      lastY = y;
    }
  }
}

// Attach event listeners
canvas.addEventListener("mousedown", handleMouse);
canvas.addEventListener("mouseup", handleMouse);
canvas.addEventListener("mousemove", handleMouse);