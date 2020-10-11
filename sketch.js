const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObject;
var ground, paperb;
var paperIMG, dustbinIMG;
function preload()
{
	
	dustbinIMG=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,280,1200,15);
	World.add(world,ground);
	dustbinObject = new dustbin(700,155,200,20);
	//dustbinObject.addImage("1",dustbinIMG);
	
	paperb = new paper(85,70,30);
	//paperb.addImage("2",paperIMG)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  paperb.display();
  ground.display();
  dustbinObject.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(paperb.body,paperb.body.position,{x:85,y:-85});
	   
	 }
   }
   

