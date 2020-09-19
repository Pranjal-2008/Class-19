var up,down,right,left,mouse,wall1,wall2,wall3,cheese4,cheeseImage,cheese2, cheese3,cheese1,cheese5,score,wall4,wall5,wall6;

function preload(){
up= loadImage("up.png");
  down = loadImage("down.png");
   right = loadImage("right.png");
   left = loadImage("left.png");
  cheeseImage = loadImage("cheese.jpg");
}

function setup(){
  createCanvas(500,500);
  
  
  mouse = createSprite(30,40,20,20);
  mouse.addImage(up);
  mouse.addImage(right);
  mouse.addImage(left);
  mouse.addImage(down);
  mouse.scale = 0.1;
  
  
  cheese1 = createSprite(100,450,20,20);
  cheese1.addImage(cheeseImage);
  cheese1.scale = 0.05;
  
  cheese2 = createSprite(200,350,20,20);
  cheese2.addImage(cheeseImage);
  cheese2.scale = 0.05;
  
  cheese3 = createSprite(430,200,20,20);
  cheese3.addImage(cheeseImage);
  cheese3.scale = 0.05;
  
  cheese4 = createSprite(450,450,20,20);
  cheese4.addImage(cheeseImage);
  cheese4.scale = 0.05;
  
  cheese5 = createSprite(70,150,20,20);
  cheese5.addImage(cheeseImage);
  cheese5.scale = 0.05;
  
  cheese1.debug = true;
  cheese1.setCollider("rectangle",0,0,20,20);
  
  wall1 = createSprite(150,30,5,70);
  wall2 = createSprite(130,65,45,5);
  wall3 = createSprite(110,100,5,70);
  wall4 = createSprite(10,130,50,5);
  wall5 = createSprite(50,200,100,5);
  wall6 = createSprite(100,250,5,100);
  wall7 = createSprite(135,300,70,5);
  wall8 = createSprite(170,275,5,50);
  wall9 = createSprite(245,250,150,5);
  wall10 = createSprite(320,180,5,140);
  wall11 = createSprite(390,220,5,220);
  wall12 = createSprite(345,110,90,5);
  wall13 = createSprite(250,70,70,5);
  wall14 = createSprite(215,35,5,70);
  wall15 = createSprite(250,160,140,5);
  wall16 = createSprite(200,225,5,50);
  wall17 = createSprite(495,210,5,420);
  wall18 = createSprite(250,3,500,5);
  wall19 = createSprite(2,250,5,500);
  wall20 = createSprite(450,410,100,5);
  wall21 = createSprite(400,410,5,60);
  wall22 = createSprite(200,400,100,5);
  wall23 = createSprite(250,450,5,120);
  wall24 = createSprite(225,497,450,5);
  
  score = 0;
}

function draw(){
  background("white");
  
  if (keyDown(UP_ARROW)){
   mouse.addImage(up);
   mouse.y = mouse.y - 5;
  }
  
  if (keyDown(DOWN_ARROW)){
   mouse.addImage(down);
   mouse.y = mouse.y + 5;
  }
  
  if (keyDown(RIGHT_ARROW)){
   mouse.addImage(right);
   mouse.x = mouse.x + 5;
  }
  if (keyDown(LEFT_ARROW)){
   mouse.addImage(left);
   mouse.x = mouse.x - 5;
  }
  
  if (mouse.collide(cheese5)){
      score = score +1;
      cheese5.destroy();
      }
  
  if (mouse.collide(cheese1)){
      score = score +1;
      cheese1.destroy();
      }
  
  if (mouse.collide(cheese2)){
      score = score +1;
      cheese2.destroy();
      }
  
  if (mouse.collide(cheese3)){
      score = score +1;
      cheese3.destroy();
      }
  
  if (mouse.collide(cheese4)){
      score = score +1;
      cheese4.destroy();
      }
  
  
  
  
  text("Score:"+score,420,30);
  
  mouse.bounceOff(wall1);
  mouse.bounceOff(wall2);
  mouse.bounceOff(wall3);
  mouse.bounceOff(wall4);
  mouse.bounceOff(wall5);
  mouse.bounceOff(wall6);
  mouse.bounceOff(wall7);
  mouse.bounceOff(wall8);
  mouse.bounceOff(wall9);
  mouse.bounceOff(wall10);
  mouse.bounceOff(wall11);
  mouse.bounceOff(wall12);
  mouse.bounceOff(wall13);
  mouse.bounceOff(wall14);
  mouse.bounceOff(wall15);
  mouse.bounceOff(wall16);
  mouse.bounceOff(wall17);
  mouse.bounceOff(wall18);
  mouse.bounceOff(wall19);
  mouse.bounceOff(wall20);
  mouse.bounceOff(wall21);
  mouse.bounceOff(wall22);
  mouse.bounceOff(wall23);
  mouse.bounceOff(wall24);
  
  if (mouse.x>500||mouse.y>500&&score===5){
    textSize(20);
    text("YOU WIN",250,50);
  }
  
  drawSprites();
}

