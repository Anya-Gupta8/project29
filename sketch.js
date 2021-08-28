const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var userEngine, userWorld;

var holder, ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygon_img;

function preload() {


}

function setup() {
    userEngine = Engine.create();
    userWorld = userEngine.world;


    createCanvas(950, 550);
    stand1 = new Ground(400, 350, 250, 10);
    stand2 = new Ground(700, 200, 250, 10)

    //level one
    block1 = new Block(260, 275, 30, 40);
    block2 = new Block(310, 275, 30, 40);
    block3 = new Block(340, 275, 30, 40);
    block4 = new Block(370, 275, 30, 40);
    block5 = new Block(400, 275, 30, 40);
    block6 = new Block(430, 275, 30, 40);
    block7 = new Block(460, 275, 30, 40);
    block8 = new Block(490, 275, 30, 40);
    //level two
    block9 = new Block(310, 335, 30, 40);
    block10 = new Block(340, 335, 30, 40);
    block11 = new Block(370, 335, 30, 40);
    block12 = new Block(400, 335, 30, 40);
    block13 = new Block(430, 335, 30, 40);
    block14 = new Block(460, 335, 30, 40);
    //level three
    block15 = new Block(340, 195, 30, 40);
    block16 = new Block(370, 195, 30, 40);
    block17 = new Block(400, 195, 30, 40);
    block18 = new Block(430, 195, 30, 40);
    //level four
    block19 = new Block(370, 155, 30, 40);
    block20 = new Block(400, 155, 30, 40);
    //level five
    block21 = new Block(385, 115, 30, 40);

    //set two
    //level one
    blocks1 = new Block(640, 175, 30, 40);
    blocks2 = new Block(670, 175, 30, 40);
    blocks3 = new Block(700, 175, 30, 40);
    blocks4 = new Block(730, 175, 30, 40);
    blocks5 = new Block(760, 175, 30, 40);
    //level two
    blocks6 = new Block(670, 135, 30, 40);
    blocks7 = new Block(700, 135, 30, 40);
    blocks8 = new Block(730, 135, 30, 40);
    //level three
    blocks9 = new Block(700, 95, 30, 40);

    //ball with slings
    ball = Bodies.circle(50, 200, 20);
    World.add(userWorld, ball);

    slingShot = new Slingshot(this.ball, { x: 100, y: 250 });


}

function draw() {
    background("black");
    Engine.update(userEngine);


    stand1.display();
    stand2.display();

   

    stroke("black")
    strokeWeight(3);
    fill("orange");
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    

    stroke("black")
    strokeWeight(3);
    fill("pink");
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();

    stroke("black")
    strokeWeight(3);
    fill("violet");
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    stroke("black")
    strokeWeight(3);
    
    fill("green");
    block19.display();
    block20.display();

    stroke("black")
    strokeWeight(3);
    fill("blue");
    block21.display();

    stroke("black")
    strokeWeight(3);
    fill("red");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();

    stroke("black")
    strokeWeight(3);
    fill("yellow");
    blocks6.display();
    blocks7.display();
    blocks8.display();
    

    stroke("black")
    strokeWeight(3);
    
    fill("pink");
    blocks9.display();


    text("drag the line and release to hit the crazy boxes", 600, 250)
    ellipse(ball.position.x, ball.position.y, 20);
    slingShot.display();
}
function mouseDragged() {
    Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    slingShot.fly();
}

