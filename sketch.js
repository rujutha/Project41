const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var maxDrops = 100,
  thunderFrame = 0;
var drops = [];


function preload() {
  walking = loadAnimation( "images/walking_1.png","images/walking_2.png","images/walking_3.png","images/walking_4.png","images/walking_5.png","images/walking_6.png","images/walking_7.png","images/walking_8.png");

  thunder1 = loadImage("images/1.png");
  thunder2 = loadImage("images/2.png");
  thunder3 = loadImage("images/3.png");
  thunder4 = loadImage("images/4.png");

  
}

function setup() {
  createCanvas(600, 600);
  background("black");

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  
  if (frameCount % 150 === 0) {
    for (var i = 0; i < maxDrops; i++) {
      drops.push(new drop(random(0, 600), random(0, 400)));
    }
  }

  Umbrella = new umbrella(250, 405, 100, 10);
  

  man = createSprite(250, 470, 10, 10);
  man.addAnimation("walking", walking);
  man.scale = 0.35;

 
  
}

function draw() {
  background(0,0,0);

  
  rand = Math.round(random(1, 4));
  if (frameCount % 120 === 0) {
    thunderFrame = frameCount;
    thunder = createSprite(random(50, 550), random(10, 30));
    switch (rand) {
      case 1:
        thunder.addImage(thunder2);
        break;

      case 2:
        thunder.addImage(thunder1);
        break;

      case 3:
        thunder.addImage(thunder3);
        break;

      case 4:
        thunder.addImage(thunder4);
        break;
      default:
        break;
    }

    

    thunder.scale = random(0.3, 0.6);
    thunder.lifetime = 10;
  }

  
  for (var i = 0; i < maxDrops; i++) {
    drops[i].display();
    drops[i].changePosition();
  }
  Umbrella.display();

  drawSprites();
}
