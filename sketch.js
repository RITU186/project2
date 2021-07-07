const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1;
var bob2;
var bob3;
var bob4;
var bob3;
var con;
var con2;
var con3;
var con4;
var con5;
  



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof=Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);


var bob1_options={
	isStatic:true
}
bob1=Bodies.circle(300,300,5,bob1_options)
	World.add(world,bob1)
bob2=Bodies.circle(350,302,5,bob1_options)
World.add(world,bob2)

bob3=Bodies.circle(400,303,5,bob1_options)
World.add(world,bob3)

bob4=Bodies.circle(450,304,5,bob1_options)
World.add(world,bob4)

bob5=Bodies.circle(500,305,5,bob1_options)
World.add(world,bob5)



con = Matter.Constraint.create({
	pointA:{x:200,y:20},
	bodyA:bob1,
   // pointB:{x:0,y:0},
	length:100,
	stiffness:0.5
  });
  
  
  World.add(world,con)

con2 = Matter.Constraint.create({
	pointB:{x:200,y:20},
	bodyB:bob2,
   // pointB:{x:0,y:0},
	length:100,
	stiffness:0.5
  });

  
  World.add(world,con2)
  

  con3= Matter.Constraint.create({
	pointC:{x:200,y:20},
	bodyC:bob3,
   // pointB:{x:0,y:0},
	length:100,
	stiffness:0.5
  });
  

  World.add(world,con3)

  con4 = Matter.Constraint.create({
	pointD:{x:200,y:20},
	bodyD:bob4,
   // pointB:{x:0,y:0},
	length:100,
	stiffness:0.5
  });
  
}

  World.add(world,con4)

  con5= Matter.Constraint.create({
	pointE:{x:200,y:20},
	bodyE:bob5,
   // pointB:{x:0,y:0},
	length:100,
	stiffness:0.5
  });
  


  World.add(world,con5)



function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background("#99004d");
  Engine.update(engine);
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
 ellipse(bob1.position.x,bob1.position.y,25)
ellipse(bob2.position.x,bob2.position.y,25)
ellipse(bob3.position.x,bob3.position.y,25)
ellipse(bob4.position.x,bob4.position.y,25)
ellipse(bob5.position.x,bob5.position.y,25)

push();
strokeWeight(2);
stroke(255);
line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y);
line(con2.pointB.position.x,con2.pointB.position.y,con2.bodyB.position.x,con2.bodyB.position.y)
line(con3.pointC.position.x,con3.pointC.position.y,con3.bodyC.position.x,con3.bodyC.position.y)
line(con4.pointD.position.x,con4.pointD.position.y,con4.bodyD.position.x,con4.bodyD.position.y)
line(con5.pointE.position.x,con5.pointD.position.y,con5.bodyE.position.x,con5.bodyE.position.y)

pop();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.





