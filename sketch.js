let sunHeight = 600;

let sundirection = -2;

let redVal = 0;

let greenVal = 0;

let reddirection = 4;

let greendirection = 1;

function setup() {
  createCanvas(600, 400);
}

function draw() {

  sky();
  sun();
  mountain();
  changes(4, 1, 2);
  trees();
  bird();

}
function sky() {
  background(redVal, greenVal, 0);
}
function sun() {
  fill(255, 135, 5, 60);
  stroke(204, 102, 0);
  strokeWeight(1);
  circle(300, sunHeight, 180);
  fill(255, 100, 0, 100);
  circle(300, sunHeight, 140);
}
function mountain() {
  fill(110, 50, 18);
  stroke(0, 0, 0)
  strokeWeight(1);
  triangle(200, 400, 520, 253, 800, 400);
  fill(110, 95, 20);
  triangle(200, 400, 520, 253, 350, 400);

  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400);

  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400);
}
function changes(redchange, greenchange, sunchange) {
  if (sunHeight === 0) {
    sundirection = sunchange;
    reddirection = -redchange;
    greendirection = -greenchange;
  } else if (sunHeight == 480) {
    sundirection = -sunchange;
    reddirection = redchange;
    greendirection = greenchange;
  }
  sunHeight += sundirection;
  redVal += reddirection;
  greenVal += greendirection;
}
function tree(x, y, size) {
  fill(80, 30, 20);
  strokeWeight(1);
  rect(x - size, y, size * 2, size * 6);
  fill(20, 130, 5);
  triangle(x - size * 3, y, x, y - size * 8, x + size * 3, y)
}
function treeLine(x) {
  let y = -0.8 * x + 450;
  return y;
}
function trees() {
  let x = 150;
  let y = treeLine(x);
  tree(x, y, 5);

  x = 180;
  y = treeLine(x);
  tree(x, y, 5);

  x = 210;
  y = treeLine(x);
  tree(x, y, 5);
}
function keyPressed() {
  redVal = 0;
  greenVal = 0;
  sunHeight = 600;
}
function bird() {
  noFill();
  stroke(1);
  arc(50,160,54,54,PI+PI/3,2*PI);
  arc(104,160,54,54,PI,PI+2/3*PI);
}
