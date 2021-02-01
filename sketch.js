
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree1;
var boy1;
var rope;
var stone;
var gameState = "onSling";
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,650,800,20);
	tree1 = new tree(590,370,450,550);
	boy1 = new Boy(100,585,150,200);
	stone = new Stone(50,540,40,40);
	rope = new Rope(stone.body,{x:50,y:540});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 tree1.display();
 boy1.display();
 stone.display(); 
 rope.display();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	
	rope.fly();

}



