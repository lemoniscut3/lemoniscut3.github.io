var hue;
var s = 200;
var l = 200;
var rainbow = true;
var rate = 2;
var sizeX = 25;
var sizeY = 25;
var shape = "ellipse";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  hue=0;
  fill("orange");
 textSize(20);
 text('keys :\nr = red,\no = orange,\ny = yellow,\ng = green,\nb = blue,\np = purple,\nspacebar = back to rainbow,\ne = erase,\na = add size,\ns = subtract size,\nt = triangle brush,\nc = circle brush', 5,25);
}

function draw() {
 //background(220);
}

function mouseDragged() {
  if (rainbow) {
    if (hue > 360) {
        hue = 0;
    } else {
        hue++;
    }
	}
  colorMode(HSL, 360);
  noStroke();
  fill(hue, s, l);
  if (shape === "ellipse") {
  ellipse(mouseX, mouseY, sizeX, sizeY);
  }
  if( shape === "triangle") {
    triangle(mouseX,mouseY,mouseX-30,mouseY+30,mouseX-30,mouseY-30);
  }
}

function keyPressed() {
  if (key === "r") {
    hue = 0;
    s = 200;
    l = 200;
    rainbow = false;
  }
  if (key === "o") {
    hue = 28;
    s = 200;
    l = 200;
    rainbow = false;
  }
  if (key === "y") {
    hue = 50;
    s = 200;
    l = 200;
    rainbow = false
  }
  if (key === "g") {
    hue = 125;
    s = 200;
    l = 200;
    rainbow = false;
  }
  if (key === "b") {
    hue = 200;
    s = 200;
    l = 200;
    rainbow = false;
  }
  if (key === "p") {
    hue = 280;
    s = 200;
    l = 200;
    rainbow = false;
  }
  if (key === "e") {
    hue = 360;
    s = 0;
    l = 0;
    rainbow = false;
  }
  if (keyCode == 32) {
    rainbow = true;
    rate *= 2;
  }
  if (key === "a") {
    sizeX += 5;
    sizeY += 5;
  }
  if (key === "s") {
    sizeX -= 5;
    sizeY -= 5;
  }
  if (key === "t") {
    shape = "triangle";
  }
  if (key === "c") {
    shape = "ellipse";
  }
}