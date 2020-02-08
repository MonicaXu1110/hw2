function setup() {
  createCanvas(600, 200);
}

function printA(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y);
  line(x,y+50,x+40,y+50);
  line(x+40,y,x+40,y+100);
}

function printI(x,y){
  line(x,y,x+40,y);
  line(x+20,y,x+20,y+100);
  line(x,y+100,x+40,y+100);
}

function printM(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y+100);
  line(x+40,y+100,x+80,y);
  line(x+80,y,x+80,y+100);
}

function printN(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y+100);
  line(x+40,y,x+40,y+100);
}

function printO(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y);
  line(x+40,y,x+40,y+100);
  line(x,y+100,x+40,y+100);
}



function draw() {
  background(250);
  stroke('#fae');
strokeWeight(4);
  printM(50,50);
  printO(140,50);
  printN(190,50);
  printI(240,50);
  printM(290,50);
  printA(380,50);
  printN(430,50);
  printI(480,50)
 
}
