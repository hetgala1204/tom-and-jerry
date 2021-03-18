var cat,catImage;


var mouse,mouseImage;
var garden,gardenImage;




function preload(){
gardenImage=loadImage("images/garden.png");

catImage=loadAnimation("images/cat1.png");
cat_img2=loadAnimation("images/cat2.png","images/cat3.png")
cat_img3=loadImage("images/cat4.png");

mouseImage=loadImage("images/mouse1.png");
mouse_img2=loadAnimation("images/mouse2.png","images/mouse3.png");
mouse_img3=loadAnimation("images/mouse4.png");
}

function setup(){
createCanvas(1000,800)

cat=createSprite(700,650,40,40);
cat.addAnimation("cat",catImage);

cat.scale=0.1;

mouse=createSprite(300,650,40,40);
mouse.addImage("mouse",mouseImage);
mouse.addAnimation("mouse_running",mouseImage);
mouse.scale=0.2;

}

function draw(){
background(gardenImage);

if(cat.x- mouse.x < ( cat.width- mouse.width)/2 ){
     cat.velocityX=0;   
    cat.addAnimation("cat4.png",cat_img3);
    cat.x=300;
    cat.scale=0.1;
    cat.changeAnimation("cat4.png");

    mouse.addAnimation("mouse4.png",mouse_img3);
    mouse.scale=0.15;
    mouse.changeAnimation("mouse4.png");

}
drawSprites();
}



function keyPressed(){
if(keyCode === LEFT_ARROW){
cat.velocityX=-3;
cat.addAnimation("cat_running",cat_img2);
cat.changeAnimation("cat_running");

mouse.addAnimation("mouse3.png",mouse_img2);
mouse.frameplay=25;
mouse.changeAnimation("mouse3.png");

}
}