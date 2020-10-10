
var monkey , monkey_running
var banana ,bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0




function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
 monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2
  console.log(ground.x)
  
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;

  drawSprites();
}


function draw() {
  background('white')
  stroke("white")
  textSize(20)
  fill("white")
   text("Score: "+ score, 280,50);
  
  stroke("black")
  textSize(20)
fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50);
  
  
  spawnBanana();
  spawnObstacle();
  
  monkey.collide(ground);  
  
     if(keyDown("space") && monkey.y >= 280) {
      monkey.velocityY = -7;
    }
    
    monkey.velocityY = monkey.velocityY + 0.8 
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
 
  
   
  
 
  
  drawSprites();
}

function spawnBanana() {
  
  if(frameCount % 80 === 0) {
    var banana = createSprite(400,255,10,40);
    banana.addImage(bananaImage)
    banana.velocityX = -6
    banana.scale = 0.1;
    banana.lifetime = 65
  }
}

function spawnObstacle() {
  
  if(frameCount % 40 === 0) {
    var obstacle = createSprite(400,330,10,40);
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -6
    obstacle.scale = 0.1;
    obstacle.lifetime = 65
  }
}


function spawnObstacle2() {
  
  if(frameCount % 120 === 0) {
    var obstacle2 = createSprite(400,330,10,40);
    obstacle2.addImage(obstacleImage)
    obstacle2.velocityX = -6
    obstacle2.scale = 0.1;
    obstacle2.lifetime = 65
  }
}


