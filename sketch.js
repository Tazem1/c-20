var fR,mR
var R1



function setup() {
  createCanvas(800,400);
  fR = createSprite(200,100,50,50)
  fR.shapeColor = "green"
  //fR.velocityX = 1
  fR.velocityY = 1
  mR = createSprite(100,100,50,50)
  mR.shapeColor = "green"

  R1 = createSprite(200,400,50,50)
 // R1.velocityX = -1
 R1.velocityY = -1
  R1.shapeColor = "green"
}

function draw() {
  background(255,255,255);  

  mR.x = World.mouseX
  mR.y = World.mouseY

  if(mR.x-fR.x<mR.width/2+fR.width/2 && 
    fR.x-mR.x<mR.width/2+fR.width/2 && 
    fR.y-mR.y<mR.height/2+fR.height/2 &&
    mR.y-fR.y<mR.height/2+fR.height/2){
    mR.shapeColor = "blue"
  }
else{
  mR.shapeColor = "green"
}

if(mR.x-fR.x<mR.width/2+fR.width/2 && 
  fR.x-mR.x<mR.width/2+fR.width/2){
    fR.velocityX = fR.velocityX*-1
    mR.velocityX = mR.velocityX*-1
  }
  if(fR.y-mR.y<mR.height/2+fR.height/2 &&
    mR.y-fR.y<mR.height/2+fR.height/2){
      fR.velocityY = fR.velocityY*-1
      mR.velocityY = mR.velocityY*-1
    }
  drawSprites();
}