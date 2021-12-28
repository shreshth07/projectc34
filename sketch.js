const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var maxSnow = 150;
var snows = []

function preload() {
  bg =  loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world  = engine.world;


  if(frameCount % 100 === 0){
    for(var i=0; i< maxSnow; i++ ){
        snow = new Snow(random(0,700), random(0,700))
        snows.push(snow)
    }
  }

  
}

function draw() {
  background(bg);  
  Engine.update(engine); 
  drawSprites();

  for(var i=0; i<maxSnow; i++) {
    snows[i].display();
    snows[i].update();
  }
}