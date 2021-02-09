const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var block1,block2
var engine,world
 var backgroundImg
 var hero1
 var floor
 var gameState=0
var hero
var rope
function preload() {
//preload the images here
this.backgroundImg=loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(1000, 700);
  engine = Engine.create();
  world = engine.world;
  hero1= new Hero(300,100,250,150)
  floor=new Ground(300,500,700,20)
  stand=new Ground(900,350,100,20)
  mons=new Monster(900,300,180,180)
  rope = new Rope(hero1.body,{x:500,y:50});
  block1=new Block(500,400,70,70)
  block2=new Block(500,300,70,70)
  block3=new Block(500,200,70,70)
  block4=new Block(500,100,70,70)
  block5=new Block(430,50,70,70)
  block6=new Block(570,200,70,70)
  block7=new Block(570,300,70,70)
  block8=new Block(570,400,70,70)
  block9=new Block(570,500,70,70)
  block10=new Block(430,100,70,70)
  // create sprites here

}

function draw() {
  background(backgroundImg);
Engine.update(engine)
//drawSprites()
hero1.display()
floor.display()
rope.display()
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
stand.display()
mons.display()
mouseDragged()
}



function mouseDragged(){

  Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
}


