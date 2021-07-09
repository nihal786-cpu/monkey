
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,420)
monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  
  var survivalTime=0
}


function draw() {
  background(225)
  
  if(ground.x<150){
    ground.x=ground.width/2
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)
  
   if (World.frameCount % 80 == 0) {
     banana=createSprite(600,270,20,20)
     banana=addImage(bananaImage)
     banana.velocityX=-5
   }
   if (World.frameCount % 110 == 0) {
     obstacle=createSprite(600,315,20,20)
     obstacle.velocityX=-5
   }

drawSprites()
   stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME-"+survivalTime,150,30)
 
 
}






