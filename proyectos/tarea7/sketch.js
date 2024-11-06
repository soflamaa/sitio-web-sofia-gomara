let circles = [];
let numCircles = 100;

function setup() {
  createCanvas(600, 600, WEBGL);
  for (let i = 0; i < numCircles; i++) {
    circles.push(new MovingCircle());
  }
}

function draw() {
  background(63,61,209);
  
  
  ambientLight(150);
  directionalLight(255, 255, 255, 0.5, 0.5, -1);
  
  
  for (let circle of circles) {
    circle.move();
    circle.display();
  }
}

class MovingCircle {
  constructor() {
    this.pos = createVector(
      random(-200, 200),
      random(-200, 200),
      random(-200, 200)
    );
    this.vel = createVector(
      random(-1, 1),
      random(-1, 1),
      random(-1, 1)
    );
    this.size = random(10, 30);
  }
  
  move() {
    this.pos.add(this.vel);
    
    //
    if (this.pos.x > 300 || this.pos.x < -300) this.vel.x *= -1;
    if (this.pos.y > 300 || this.pos.y < -300) this.vel.y *= -1;
    if (this.pos.z > 300 || this.pos.z < -300) this.vel.z *= -1;
  }
  
  display() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    noStroke();
    fill(215,0,0);
    sphere(this.size / 2); 
    pop();
  }
}