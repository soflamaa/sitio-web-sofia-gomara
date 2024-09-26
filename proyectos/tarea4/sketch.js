let d;
let div = 5; 
let sym = 360 / div; 

function setup() {
  createCanvas(windowWidth, windowHeight);  
  angleMode(DEGREES); 
}

function draw() {
  background(56,56,52);  
  stroke(0);   
  d = map(mouseX, 0, width, 0, 180);   

  for (i = 0; i < 360; i += sym) { 
    push();                                
    translate(width / 2, height / 2); 
    rotate(i);
    branch(130);  
    pop(); 
  }
}

function branch(br) {
  fill(0)
  circle(40, 50, 4, 5);  
  translate(0.01, 10); 
  if (br > 13) {
    push();
    rotate(d);  
    branch(br * 0.7); 
    pop();          

    push();           
    rotate(-d); 
    branch(br * 0.7); 
    pop(); 
  }
}
