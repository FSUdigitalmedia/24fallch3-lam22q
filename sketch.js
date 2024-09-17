let x1 = 100;     // x position of the first ball
let y1 = 0;       // y position of the first ball
let x1Speed = 3;  // speed in X direction
let y1Speed = 7;  // speed in Y direction
let d1 = 20;      // diameter of the first ball

// Second shape
let x2 = 50;     
let y2 = 90;      
let x2Speed = 4;  
let y2Speed = 10; 
let d2 = 20;      

// Third shape
let x3 = 50;     
let y3 = 90;      
let x3Speed = 4;  
let y3Speed = 10; 
let d3 = 20;      

// Background color
let bgColor = '#fae';

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(bgColor);

  // First shape movement
  if (x1 > width || x1 < 0) {
    x1Speed *= -1;
  }
  x1 += x1Speed;

  if (y1 > height || y1 < 0) {
    y1Speed *= -1;
  }
  y1 += y1Speed;
  circle(x1, y1, d1);

  // Second shape movement
  if (x2 > width || x2 < 0) {
    x2Speed *= -1;
  }
  x2 += x2Speed;

  if (y2 > height || y2 < 0) {
    y2Speed *= -1;
  }
  y2 += y2Speed;
  circle(x2, y2, d2);

  // Third shape movement
  if (x3 > width || x3 < 0) {
    x3Speed *= -1;
  }
  x3 += x3Speed;

  if (y3 > height || y3 < 0) {
    y3Speed *= -1;
  }
  y3 += y3Speed;
  circle(x3, y3, d3);
}

// Change background color when the mouse is released
function mouseReleased() {
  bgColor = color(random(255), random(255), random(255));
}

// Increase the size of the shapes when the mouse is pressed
function mousePressed() {
  d1 += 5;
  d2 += 5;
  d3 += 5;
}

// Keyboard interaction: change speed or reset
function keyPressed() {
  if (keyCode === UP_ARROW) {
    x1Speed *= 1.2;
    y1Speed *= 1.2;
    x2Speed *= 1.2;
    y2Speed *= 1.2;
    x3Speed *= 1.2;
    y3Speed *= 1.2;
  } else if (keyCode === DOWN_ARROW) {
    x1Speed *= 0.8;
    y1Speed *= 0.8;
    x2Speed *= 0.8;
    y2Speed *= 0.8;
    x3Speed *= 0.8;
    y3Speed *= 0.8;
  } else if (key === 'r' || key === 'R') {
    // Reset positions and speeds when 'R' is pressed
    x1 = 100; y1 = 0; x1Speed = 3; y1Speed = 7;
    x2 = 50; y2 = 90; x2Speed = 4; y2Speed = 10;
    x3 = 50; y3 = 90; x3Speed = 4; y3Speed = 10;
    d1 = d2 = d3 = 20;
  }
}
