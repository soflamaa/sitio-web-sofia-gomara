function setup() {
  createCanvas(300, 300);
  angleMode(DEGREES)
  rectMode(CENTER);
}

function draw() {
  background(149,41,224);
  noFill();

  push();
  translate(width/2,height/2)
  for (let i = 0; i < 40; i++) {
  
  stroke(250,255,0)
  strokeWeight(1);
     rotate(sin(frameCount + i) * 10);
 
 
    
  rect(0, 0, 200 - i * 10, 00 - i * 8, 00);
  }

  pop();
}