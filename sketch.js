function preload() {
  arrrows=loadImage("Images/arrows.png");
  spacebar=loadImage("Images/space.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
   Element1=createElement('h1','ON OFF');
   Element1.position(width/2-120,height/2-200); 
   Element1.style('font-size','50px');
   Element1.style('font-family','cursive');
   Button1=createButton('START GAME');
   Button1.position(width/2-120,height/2+10);
   Button1.style('width','200px');
   Button1.style('height','50px');
   Button1.style('font-size','20px');
   Button1.style('font-weight','bold');
   Button1.style('font-family','cursive');
   Button1.mousePressed(()=>{
    Element1.hide();
    Button1.hide();
    Button2.hide();
   });
   Button2=createButton('CONTROLS');
   Button2.position(width/2-120,height/2+100);
   Button2.style('width','200px');
   Button2.style('height','50px');
   Button2.style('font-size','20px');
   Button2.style('font-weight','bold');
   Button2.style('font-family','cursive');
   Button2.mousePressed(()=>{
    Element1.hide();
    Button1.hide();
    Button2.hide();
    Buttons=createSprite(width/2-100,height/2+50);
    Buttons.addImage(arrrows);
    Buttons.scale=0.3;
    space=createSprite(width/2-100,height/2-200);
    space.addImage(spacebar);
    space.scale=0.9;
    Element2=createElement('h3','Press space to ON and OFF');
    Element2.position(width/2+20,height/2-250); 
    Element2.style('font-size','20px');
    Element2.style('font-family','cursive');
    Element3=createElement('h3','Press UP arrow to jump');
    Element3.position(width/2+20,height/2); 
    Element3.style('font-size','20px');
    Element3.style('font-family','cursive');




   });
  }

function draw() {
  background("white");  
  drawSprites();
}