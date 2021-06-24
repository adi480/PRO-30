
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 605);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
	roof = new Roof(400,100,500,50);

	bobObject1 = new Bob(275, 400, 80);
	bobObject2 = new Bob(355, 400, 80);
	bobObject3 = new Bob(425, 400, 80);
	bobObject4 = new Bob(515, 400, 80);
	bobObject5 = new Bob(605, 400, 80);

	rope1 = new Rope(bobObject1.body, roof.body, -90*2, 10);
	rope2 = new Rope(bobObject2.body, roof.body, -100*2 + 100, 10);
	rope3 = new Rope(bobObject3.body, roof.body, -115*2 + 200, 10);
	rope4 = new Rope(bobObject4.body, roof.body, -125*2 + 300, 10);
	rope5 = new Rope(bobObject5.body, roof.body, -135*2 + 400, 10);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
  stroke("red");
  fill ("red");
  textSize(40);
  text("MADE BY ADITYA.D.S",180,550);  

  
  drawSprites();
 
}

function keyPressed(keyCode = UP_ARROW)
{
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:150,y:-140});
}