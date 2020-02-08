function setup() {
  createCanvas(600, 500);
}
function printA(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y);
  line(x,y+50,x+40,y+50);
  line(x+40,y,x+40,y+100);
}

function printB(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y);
  line(x,y+50,x+40,y+50);
  line(x+40,y,x+40,y+100);
  line(x,y+100,x+40,y+100);
}

function printC(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y);
  line(x,y+100,x+40,y+100);
}

function printD(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y+10);
  line(x,y+100,x+40,y+90);
  line(x+40,y+10,x+40,y+90
      );
}

function printE(x, y) {
  line(x, y, x, y + 100);
  line(x, y, x + 40, y);
  line(x, y + 50, x + 40, y + 50);
  line(x, y + 100, x + 40, y + 100);
}

function printF(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y);
  line(x,y+50,x+40,y+50);
}

function printG(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y);
  line(x+20,y+50,x+40,y+50);
  line(x,y+100,x+40,y+100);
  line(x+40,y+50,x+40,y+100);
}

function printH(x, y) {
  line(x, y, x, y + 100);
  line(x + 40, y, x + 40, y + 100);
  line(x, y + 50, x + 40, y + 50);
}

function printI(x,y){
  line(x,y,x+40,y);
  line(x+20,y,x+20,y+100);
  line(x,y+100,x+40,y+100);
}

function printJ(x,y){
  line(x,y,x+40,y);
  line(x+20,y,x+20,y+100);
  line(x,y+100,x+20,y+100);
}

function printK(x,y){
  line(x,y,x,y+100);
  line(x+40,y,x,y+50);
  line(x,y+50,x+40,y+100);
}

function printL(x, y) {
  line(x, y, x, y + 100);
  line(x, y + 100, x + 40, y + 100);
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

function printP(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y);
  line(x+40,y,x+40,y+50);
  line(x,y+50,x+40,y+50);
}

function printQ(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y);
  line(x,y+100,x+40,y+100);
  line(x+40,y,x+40,y+100);
  line(x+20,y+50,x+40,y+100);
}

function printR(x,y){
  line(x,y,x,y+100);
  line(x,y,x+40,y);
  line(x,y+50,x+40,y+50);
  line(x+40,y,x+40,y+50);
  line(x+20,y+50,x+40,y+100);
}

function printS(x,y){
  line(x,y,x,y+50);
  line(x,y,x+40,y);
  line(x,y+50,x+40,y+50);
  line(x+40,y+50,x+40,y+100);
  line(x,y+100,x+40,y+100);
}

function printT(x,y){
  line(x,y,x+40,y);
  line(x+20,y,x+20,y+100);
}

function printU(x,y){
  line(x,y,x,y+100);
  line(x,y+100,x+40,y+100);
  line(x+40,y,x+40,y+100);
}

function printV(x,y){
  line(x,y,x+20,y+100);
  line(x+20,y+100,x+40,y);
}

function printW(x,y){
  line(x,y,x+20,y+100);
  line(x+40,y,x+20,y+100);
  line(x+40,y,x+60,y+100);
  line(x+60,y+100,x+80,y);
}

function printX(x,y){
  line(x,y,x+40,y+100);
  line(x+40,y,x,y+100);
}

function printY(x,y){
  line(x,y,x+20,y+50);
  line(x+20,y+50,x+20,y+100);
  line(x+40,y,x+20,y+50);
}

function printZ(x,y){
  line(x,y,x+40,y);
  line(x+40,y,x,y+100);
  line(x,y+100,x+40,y+100);
}



function draw() {
  background(200);
  printA(5,5);
  printB(55,5);
  printC(105,5);
  printD(155,5);
  printE(205,5);
  printF(255,5);
  printG(305,5);
  printH(355,5);
  printI(5,110);
  printJ(55,110);
  printK(105,110);
  printL(155,110);
  printM(205,110);
  printN(295,110);
  printO(345,110);
  printP(395,110);
  printQ(5,215);
  printR(55,215);
  printS(105,215);
  printT(155,215);
  printO(205,215);
  printV(255,215);
  printW(305,215);
  printX(395,215);
  printY(5,320);
  printZ(55,320);
}
