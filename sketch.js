//nameSpacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,ground,ball;


function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

var options={

  isStatic: true

}

  ground=Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

 console.log(ground);
 console.log(ground.position.x);
 console.log(ground.position.y);

var ball_options = {

  restitution:0.5
}

ball=Bodies.circle(200,200,25,ball_options);
World.add(world,ball);

}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  fill ("brown")
  
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);
  fill ("red")

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,25,25);

  drawSprites();
}