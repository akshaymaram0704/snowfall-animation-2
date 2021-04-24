const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow = [];
var rand;
var maxSnow = 100





var snowImg






function preload()  {
  snowImg = loadImage("snow3.jpg")

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
  for(var i=0; i<maxSnow; i++){
    snow.push(new createSnow(random(0,400), random(0,400)));
}
  
  

  
}

function draw() {
  Engine.update(engine);
  background(snowImg);

  //if(frameCount % 150 === 0){
    
    
  //}
  
    for(var i = 0; i< maxSnow; i++){
      snow[i].showSnow()
      snow[i].updateY()
  }
    

  


  
  drawSprites();
}