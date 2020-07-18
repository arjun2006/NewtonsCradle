
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof
var bobDiameter=40
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  bobObject1=new Bob(120,600,60,60);
  bobObject2=new Bob(200,600,60,60);
  bobObject3=new Bob(280,600,60,60);
  bobObject4=new Bob(360,600,60,60);
  bobObject5=new Bob(440,600,60,60);
  roof= new Roof(300,200,400,20);
  
  rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0)
  rope2=new Rope(bobObject2.body,roof.body,-bobDiameter,0)
  rope3=new Rope(bobObject3.body,roof.body,0,0)
  rope4=new Rope(bobObject4.body,roof.body,bobDiameter,0)
  rope5=new Rope(bobObject5.body,roof.body,bobDiameter*2,0)
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  
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
roof.display();
 
 

  
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-500,y:-500})
  }
}

