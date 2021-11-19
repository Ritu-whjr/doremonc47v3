
var doraemon, doraemonImg, scared, scareImg;
var home, homeImg;
var score = 0;
var gr;
var food, foodImg, foodGrp;
var mouse, mouseImg, mouseGrp;
var gameOver, gameOverImg;
var restart, resetImg;
var song;
function preload(){
  doraemonImg = loadImage("doraemon.png");
  homeImg = loadImage("home.png");
  foodImg = loadImage("doracake.png");
  mouseImg = loadImage("mouse.png");
  scareImg = loadImage("doraemon_scared.png");
  resetImg = loadImage("reset.png");
  gameOverImg = loadImage("gameOver.png");
  song = loadSound("song.mp3");
}

function setup(){
   // createCanvas(1200,600);
   createCanvas(600,400);

    home = createSprite(600,300,20,20)
    home.addImage(homeImg);
    home.scale = 2.8;
    background.velocityX = -10;

   // doraemon = createSprite(50,400,20,20);

   doraemon = createSprite(50,340,20,20);
    doraemon.addImage(doraemonImg);
    doraemon.scale = 0.1;

  /*  ground = createSprite(600,590,1200,10)
    ground.visible = false;*/

 
  gr = createSprite(300,390,1000,5);
  gr.visible = true;
    /*doracake = createSprite(50,60,150,250);
    doracake.addImage(doracakeImg);
    doracake.scale = 0.*/

    /*mouse = createSprite(100,20,150,300);
    mouse.addImage(mouseImg);*/

}

function draw(){
  background("white");

    if(keyDown("space")){
        doraemon.velocityY = -10;
    }
    
    doraemon.velocityY = doraemon.velocityY+0.8;
   // doraemon.collide(ground);
   doraemon.collide(gr);

    spawnFoods();
    spawnMouse();

    drawSprites();
}


/*function spawnFoods(){

    if(frameCount%80===0){
    doracake = createSprite(1200,250,40,10);
    doracake.addImage(foodImg);
    doracake.scale = 0.05;
    doracake.velocityX = -12;
    }
}

function spawnMouse(){

    if(frameCount%120===0){
   // mouse = createSprite(1200,540,40,10);
   mouse = createSprite(600,360,40,10);
    mouse.addImage(mouseImg);
    mouse.scale = 0.05;
    mouse.velocityX = -8;
    }
}*/
function spawnFoods() {
  //write code here to spawn the foods
  if (frameCount % 200 === 0) {
    food = createSprite(600,180,40,10);
    food.addImage(foodImg);
    food.scale = 0.05;
    food.velocityX = -12;
    
     //assign lifetime to the variable
    

  }
}

function spawnMouse() {
  if (frameCount % 100 === 0) {
    mouse = createSprite(600,360,40,10);
    mouse.addImage(mouseImg);
    mouse.scale = 0.05;
    mouse.velocityX = -10;
    
    
  }
}