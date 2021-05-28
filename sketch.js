
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof=new Roof(350,100,300,30);
 world.add(world,roof);

 bobObject1=new Bob(250,300);
 bobObject2=new Bob(300,300);
 bobObject3=new Bob(350,300);
 bobObject4=new Bob(400,300);
 bobObject5=new Bob(450,300);



 rope1=new Rope(bobObject1.body,roof.body,-100,0);
 world.add(world,rope1);

 rope2=new Rope(bobObject2.body,roof.body,-50,0);
 world.add(world,rope2);
 
 rope3= new Rope(bobObjects3.body,roof.body,0,0);
 world.add(world,rope3);

 rope4= new Rope(bobObject4.body,roof.body,+50,0);
 world.add(world,rope4);

 rope5=new Rope(bobObjects.body,roof.body,+100,0);
 world.add(world,rope5);

	Engine.run(engine);
  
}


function draw() {

	background("white");
	Engine.update(engine);


  rectMode(CENTER);
  background(0);

  roof.display();


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}



