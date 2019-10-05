/* 
    Equipe: 
        Luiza Bastos Moreno - Subturma A (Líder) 
        Adalgisa Onofre de Araújo Neta - Subturma A 
        Etapas 1 e 2
*/

var x= 200;
var y1=50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(25);
   if (keyIsDown(LEFT_ARROW)) {
    x=x-1;
  }
   if (keyIsDown(RIGHT_ARROW)) {
    x=x+1;
  }
   if (keyIsDown(DOWN_ARROW)) {
    y1= y1+1;
  }
   if (keyIsDown(UP_ARROW)) {
    y1= y1-1;
  }
  ellipse(x,350, 50,50)
  square(175,y1,50,20);
}