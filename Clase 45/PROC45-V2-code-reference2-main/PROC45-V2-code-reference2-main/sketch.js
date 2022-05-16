var bg,bgImg;
var player, shooterImg, shooter_shooting;
var Bala,BalaSprite

function preload(){
  
  shooterImg = loadImage("assets/SEÑOR.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  Bala = loadImage("assets/BALAS.png")
  bgImg = loadImage("assets/PLANTAS VS ZOMBIES FONDO.png")

}

function setup() {

  createCanvas(windowWidth,windowHeight);

//creating the player sprite
player = createSprite(displayWidth-1355, displayHeight-400, 50, 50);
player.addImage(shooterImg)
  player.scale = 1.5
  player.setCollider("rectangle",0,0,300,300)

    //adding the background image
    bg = createSprite(displayWidth/2,displayHeight/2 -70,100,100)
    bg.addImage(bgImg)
    bg.scale = 1.35
    
BalaSprite = createSprite(player.x +10,player.y -5)
BalaSprite.addImage("balaimg",Bala)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-10
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+10
}

if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-10
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 player.x = player.x+10
}



//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  Bala.addImage(player)
}

drawSprites();

}
