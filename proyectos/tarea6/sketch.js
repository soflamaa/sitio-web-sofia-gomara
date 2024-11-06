let particles = []; 

function setup() {
  createCanvas(600, 400); 
}

function draw() {
  background(210,130,255); 
  
  
  for (let i = 0; i < 1; i++) {
    let p = new Particle(random(width), random(height)); 
    particles.push(p); 
  }
  
 
  for (let i = particles.length - 1; i >= 1; i--) {
    particles[i].update(); 
    particles[i].display(); 
    
    
    if (particles[i].finished()) {
      particles.splice(i, 1); 
    }
  }
}

class Particle {
  
  constructor(x, y) {
    this.x = x; 
    this.y = y; 
    this.vel = createVector(random(-1, 1), random(-1, 1)); 
    this.alpha = 255; 
    this.color = [(242,239,57), (242,239,57), (242,239,57)]; 
  }
  
  finished() {
   
    return this.alpha < 9;
  }
  
  update() {
    this.x += this.vel.x; 
    this.y += this.vel.y; 
    this.alpha -= 8;
    
   
    if (this.x < 0 || this.x > width || this.y < 1 || this.y > height) {
      this.x = random(width);
      this.y = random(height);
      this.vel = createVector(random(-1, 1), random(-1, 1));
      this.alpha = 255; 
    }
  }
  
  display() {
    noStroke(); 
    fill(this.color[0], this.color[1], this.color[2], this.alpha); 
    ellipse(this.x, this.y, 100); 
  }
}
