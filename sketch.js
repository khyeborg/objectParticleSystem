var xnoise = 0;
var ynoise = 10000;
var circleArray = [];

var x = 250;
var y = 250;

var start = false;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(0);
  
  if (start == false) {
    fill(255);
    textAlign(CENTER);
    textSize(18);
    text("Click on the canvas to create some particles", width / 2, height / 2);
  }
  
  for (let i = 0; i < circleArray.length; i++) {
    fill(circleArray[i].r, circleArray[i].g, circleArray[i].b, circleArray[i].opacity);
    ellipse(circleArray[i].x, circleArray[i].y, circleArray[i].width, circleArray[i].height);
    
    var xvalue = noise(circleArray[i].xnoise);
    circleArray[i].xnoise += 0.01;
  
    xmove = xvalue * 4 - 2;
    circleArray[i].x += xmove;
    
    var yvalue = noise(circleArray[i].ynoise);
    circleArray[i].ynoise += 0.01;
  
    ymove = yvalue * 4 - 2;
    circleArray[i].y += ymove;
    
    circleArray[i].opacity -= 0.2;
  }
}

function mousePressed() {
  start = true;
  
  for (let i = 0; i < 10; i++) {
    let temp = new Circle(mouseX, mouseY, 20, 20, random(255), random(255), random(255), random(10000000), random(10000000));
    circleArray.push(temp);
  }
}

class Circle {
  constructor(x, y, width, height, r, g, b, xnoise, ynoise) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.r = r;
    this.g = g;
    this.b = b;
    this.xnoise = xnoise;
    this.ynoise = ynoise;
    this.opacity = 255;
  }
}