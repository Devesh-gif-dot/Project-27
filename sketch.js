
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bob1,Bob2,Bob3,Bob4,Bob5;
var rope1,rope2,rope3,rope4,rope5;
var Roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Roof = new roof(350,100,500,10);

	Bob1 = new Bob(100,400,50);
	rope1 = new rope(Bob1.body, Roof.body,-175,0);

	Bob2 = new Bob(150,400,50);
	rope2 = new rope(Bob2.body, Roof.body,-125,0)
	
	Bob3 = new Bob(200,400,50);
	rope3 = new rope(Bob3.body, Roof.body,-75,0)
	
	Bob4 = new Bob(250,400,50);
	rope4 = new rope(Bob4.body, Roof.body,-25,0)

	Bob5 = new Bob(300,400,50);
	rope5 = new rope(Bob5.body, Roof.body,25,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');

  Roof.display();

  Bob1.display();
  rope1.display();

  Bob2.display();
  rope2.display();
  
  Bob3.display();
  rope3.display();
  
  Bob4.display();
  rope4.display();
  
  Bob5.display();
  rope5.display();

  bobON();
  drawSprites();
 
}
function bobON(){
	if(keyDown("space")){
		Matter.Body.applyForce(Bob5.body,Bob5.body.position,{x:0.05,y:-0.05})
	}
}



