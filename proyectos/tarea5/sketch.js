let circles = [];


function setup() {
  createCanvas(400, 400);
  noStroke();
  
  
  for (let i = 0; i < 10; i++) {
    circles.push(new Circle(random(width), random(height)));
   
  }
}

function draw() {
  let r = map(sin(frameCount * 0.01), -1, 1, 0, 255);
  let g = map(cos(frameCount * 0.02), -1, 1, 0, 255); 
  let b = map(sin(frameCount * 0.03), -1, 1, 0, 255); 
  background(r, g, b);
  
  
  for (let circle of circles) {
    circle.update();
    circle.display();
  }

  
}


class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = random(TWO_PI);
    this.radius = random(10, 100); 
    this.xSpeed = random(1, 3); 
    this.ySpeed = random(1, 3);
    this.alpha = random(50, 150);
  }
  
  update() {
      this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    
    if (this.x + this.radius > width || this.x - this.radius < 0) {
      this.xSpeed *= -1; 
    }
    if (this.y + this.radius > height || this.y - this.radius < 0) {
      this.ySpeed *= -1; 
    }
  }
  
  display() {
    fill( 0, this.alpha);;
    ellipse(this.x, this.y, this.radius * 1); // Dibujar el círculo
  }
}
