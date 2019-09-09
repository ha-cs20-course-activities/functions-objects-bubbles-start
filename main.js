// Bubbles

// Setup Canvas & Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let bubble1X = 200;
let bubble1Y = 300;
let bubble1Radius = 25;
let bubble1R = randomDec(0, 255);
let bubble1G = randomDec(0, 255);
let bubble1B = randomDec(0, 255);

let bubble2X = 400;
let bubble2Y = 300;
let bubble2Radius = 25;
let bubble2R = randomDec(0, 255);
let bubble2G = randomDec(0, 255);
let bubble2B = randomDec(0, 255);

let bubble3X = 600;
let bubble3Y = 300;
let bubble3Radius = 25;
let bubble3R = randomDec(0, 255);
let bubble3G = randomDec(0, 255);
let bubble3B = randomDec(0, 255);

// Animation Loop
requestAnimationFrame(animate);

function animate() {
    // Update Bubble 1
    bubble1X += randomDec(-1, 1);
    bubble1Y += randomDec(-1, 1);
    bubble1Radius += randomDec(-0.5, 0.5);
    bubble1R = randomDec(0, 255);
    bubble1G = randomDec(0, 255);
    bubble1B = randomDec(0, 255);

    // Update Bubble 2
    bubble2X += randomDec(-1, 1);
    bubble2Y += randomDec(-1, 1);
    bubble2Radius += randomDec(-0.5, 0.5);
    bubble2R = randomDec(0, 255);
    bubble2G = randomDec(0, 255);
    bubble2B = randomDec(0, 255);

    // Update Bubble 3
    bubble3X += randomDec(-1, 1);
    bubble3Y += randomDec(-1, 1);
    bubble3Radius += randomDec(-0.5, 0.5);
    bubble3R = randomDec(0, 255);
    bubble3G = randomDec(0, 255);
    bubble3B = randomDec(0, 255);

    // Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bubble 1
    ctx.strokeStyle = 'rgb(' + bubble1R + ',' + bubble1G + ',' + bubble1B + ')';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(bubble1X, bubble1Y, bubble1Radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw Bubble 2
    ctx.strokeStyle = 'rgb(' + bubble2R + ',' + bubble2G + ',' + bubble2B + ')';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(bubble2X, bubble2Y, bubble2Radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Draw Bubble 3
    ctx.strokeStyle = 'rgb(' + bubble3R + ',' + bubble3G + ',' + bubble3B + ')';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(bubble3X, bubble3Y, bubble3Radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Request Another Animation Frame
    requestAnimationFrame(animate);
}

// Helper Functions
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}