var population;
var lifespan = 300;
var count = 0;
var target;
var HScore = 0;
var Gen = 1;
var maxForce=0.4;



var rw = 400;
var rh = 10;
var rx = 200;
var ry = 300;

function setup() {
  createCanvas(800, 600);
  population = new Population();
  target = createVector(width / 2, 50);
  textSize(12);
}


function draw() {
  background(0, 10);
  population.run();
  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    count = 0;
    Gen++;
  }
  fill(100);
  rect(7, 9, 70, 54);
  fill(255);
  rect(rx, ry, rw, rh);
  text('Count:' + count, 10, 25);
  text('Gen:' + Gen, 10, 40);
  text('High:' + HScore, 10, 55);
  fill(255, 255, 255, 50);
  ellipse(target.x, target.y, 16, 16);
  fill(255, 0, 0, 50);
  noStroke();
  ellipse(target.x, target.y, 8, 8);
}