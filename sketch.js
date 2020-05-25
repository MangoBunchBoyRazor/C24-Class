const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(590,510,50,50);
    box2 = new Box(710,510,50,50);
    box3 = new Box(590,550,50,50);
    box4 = new Box(710,550,50,50);
    box5 = new Box(650,430,50,50);
    bird = new Bird();
    pig1 = new Pig(650,550);
    pig2 = new Pig(650,510);
    log1 = new Log(650,540,200,10,PI);
    log4 = new Log(650,460,200,10,PI);
    log2 = new Log(605,420,100,10,-PI/4);
    log3 = new Log(705,420,100,10,PI/4);
    ground = new Ground(width/2,height,width,20);

    let render = Matter.Render.create({
        engine:engine,
        element:document.body
    });
    Matter.Render.run(render);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box3.body.position.x);
    //.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    bird.display();
    pig1.display();
    pig2.display();
 
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}