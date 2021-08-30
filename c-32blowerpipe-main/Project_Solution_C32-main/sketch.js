const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;


function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  //add the button
  button = createSprite(300,400);
  button.scale = 0.5
}

function draw() {
  background(59);
  Engine.update(engine);

  //show the blower,ball,blowerPipe
  blower.show()
  blowerMouth.show()
  ball.show()

  if(mousePressedOver(button)){
    Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})
  }

  drawSprites()
}

