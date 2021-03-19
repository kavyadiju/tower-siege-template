const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img,backgroundImg;
var bg = "bgI.jpg";

function preload(){
  getBackgroundImg();
  backgroundImg = loadImage(bg);
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40,1);
  console.log(block1);
  block2 = new Block(330,275,30,40,1);
  block3 = new Block(360,275,30,40,1);
  block4 = new Block(390,275,30,40,1);
  block5 = new Block(420,275,30,40,1);
  block6 = new Block(450,275,30,40,1);
  block7 = new Block(480,275,30,40,1);
  //level two
  block8 = new Block(330,235,30,40,2);
  block9 = new Block(360,235,30,40,2);
  block10 = new Block(390,235,30,40,2);
  block11 = new Block(420,235,30,40,2);
  block12 = new Block(450,235,30,40,2);
  //level three
  block13 = new Block(360,195,30,40,3);
  block14 = new Block(390,195,30,40,3);
  block15 = new Block(420,195,30,40,3);
  //top
  block16 = new Block(390,155,30,40,4);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40,5);
  blocks2 = new Block(670,175,30,40,5);
  blocks3 = new Block(700,175,30,40,5);
  blocks4 = new Block(730,175,30,40,5);
  blocks5 = new Block(760,175,30,40,5);
  //level two
  blocks6 = new Block(670,135,30,40,6);
  blocks7 = new Block(700,135,30,40,6);
  blocks8 = new Block(730,135,30,40,6);
  //top
  blocks9 = new Block(700,95,30,40,1);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  
  if(backgroundImg)
  background(backgroundImg);

  imageMode(CENTER)
  fill("gold");
  image(backgroundImg,450,200,900,400);
  image(polygon_img ,ball.position.x,ball.position.y,40,40); 
  slingShot.display();

  textSize(20);
  fill("purple");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the Gift Boxes",100,30);

  
  textSize(15);
  text("Press Space to get a second Chance to Play!!",650 ,350);


  ground.display();
  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
 
  block13.display();
  block14.display();
  block15.display();
  
  block16.display();

  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
 
  blocks6.display();
  blocks7.display();
  blocks8.display();
  
  blocks9.display();
 

 
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.ball);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "bgI.jpg"; 
  
  }
  else{
      bg ="bg1.jpg";
  }
  backgroundImg = loadImage(bg);

}
