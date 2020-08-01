const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(900,500);
  engine = Engine.create();
  world = engine.world;

  stone1=new Stone();
  sling1=new Sling({x:180,y:200},stone1.body);

  ground1=new Ground(600,280,300,20);

  box1=new Box(600,100)
  box2=new Box(600,50)
  box3=new Box(550,100)
  box4=new Box(550,50)
  box5=new Box(650,100)
  box6=new Box(650,50)
  box7=new Box(600,0)
  box8=new Box(700,0)
  box9=new Box(500,0)


  


}

function draw() {
  Engine.update(engine)
  background("yellow"); 
  
  rectMode(CENTER)


  stone1.display()
  sling1.display()
  ground1.display()

  box1.display();
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  sling1.fly();
}