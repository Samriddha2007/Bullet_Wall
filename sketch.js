//IF GREEN  = BOUNCE BACK THE WALL;
//IF YELLOW = JOIN WITH THE WALL;
//IF RED    = BREAK THE WALL; 

var bullet,wall,bullet1,wall1,bullet2,wall2;
var speed,weight,thickness,speed1,weight1,thickness1,speed2,weight2,thickness2;
var dup,dup1,dup2;

function setup() 
{
  createCanvas(1370,700);
  thickness = random(22,65);
  speed = random(120,220);
  weight = random(30,40);
  thickness1 = random(22,65);
  speed1 = random(120,220);
  weight1 = random(30,40);
  thickness2 = random(22,65);
  speed2 = random(120,220);
  weight2 = random(30,40);

  bullet = createSprite(50,120,50,10);
  bullet.shapeColor = "orange";
  bullet1 = createSprite(50,310,50,10);
  bullet1.shapeColor = "rgb(255, 10, 116)";
  bullet2 = createSprite(50,520,50,10);
  bullet2.shapeColor = "rgb(0, 255, 242)";

  dup = createSprite(50,120,50,10);
  dup.shapeColor = "orange";
  dup1 = createSprite(50,310,50,10);
  dup1.shapeColor = "rgb(255, 10, 116)"
  dup2 = createSprite(59,520,50,10);
  dup2.shapeColor = "rgb(0, 255, 242)";

  wall = createSprite(1300,110,thickness,height/4);
  wall1 = createSprite(1300,320,thickness1,height/4);
  wall2 = createSprite(1300,520,thickness2,height/4);
}

function draw() 
{
  background(84, 124, 235);  
  drawSprites();

  textSize(30);
  fill("pink");

  bullet.velocityX = 15;

  if(dup.visible == true)
  {
  dup.x = bullet.x;
  }
  dup.visible = true;


  if(bullet.x >=1290)
  {
     text("State = Lethal,Rate = C+",400,100);
     fill("red");
     textSize(50);
     text("Rejected",450,70);
  }
  
  if(istouching(bullet,wall))
  {
    bullet.velocityX = 0;
    
    0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(0.5*weight*speed*speed/(thickness*thickness*thickness)>= 10)
    {
      wall.shapeColor = rgb(255, 0, 0);
      wall.x = 100000;
      bullet.velocityX = 15;
    }
    if( 0.5*weight*speed*speed/(thickness*thickness*thickness)>= 4 && 0.5*weight*speed*speed/(thickness*thickness*thickness)< 10)
    {
      textSize(50);
      fill("yellow");
      text("Processing",450,70);
      fill("pink");
      textSize(30);
      text("State = Average,Rate = B+",400,100);
      wall.shapeColor = rgb(230, 230, 0);
    }
  }
  else
  {
    bullet.velocityX = random(18,28);
  }

  if(istouching(wall,dup))
  {
    dup.visible = false;
    if( 0.5*weight*speed*speed/(thickness*thickness*thickness) <= 4)
    {
      text("State = Good,Rate = A+",400,100);
      fill("green");
      textSize(50);
      text("Appointed",450,65);
      wall.shapeColor = rgb(0, 255, 0);
      bullet.velocityX = -15;
    }
  }

  textSize(30);
  fill("pink");

  bullet1.velocityX = 5;

  if(dup1.visible == true)
  {
  dup1.x = bullet1.x;
  }
  dup1.visible = true;


  if(bullet1.x >=1290)
  {
     text("State = Lethal,Rate = C+",400,290);
     fill("red");
     textSize(50);
     text("Rejected",450,260);
  }
  
  if(istouching(bullet1,wall1))
  {
    bullet1.velocityX = 0;
    
    0.5*weight1*speed1*speed1/(thickness1*thickness1*thickness1);

    if(0.5*weight1*speed1*speed1/(thickness1*thickness1*thickness1)>= 10)
    {
      wall1.shapeColor = rgb(255, 0, 0);
      wall1.x = 100000;
      bullet1.velocityX = 15;
    }
    if( 0.5*weight1*speed1*speed1/(thickness1*thickness1*thickness1)>= 4 && 0.5*weight1*speed1*speed1/(thickness1*thickness1*thickness1)< 10)
    {
      textSize(50);
      fill("yellow");
      text("Processing",450,260);
      fill("pink");
      textSize(30);
      text("State = Average,Rate = B+",400,290);
      wall1.shapeColor = rgb(230, 230, 0);
    }
  }
  else
  {
    bullet1.velocityX = random(16,26);
  }

  if(istouching(wall1,dup1))
  {
    dup1.visible = false;
    if( 0.5*weight1*speed1*speed1/(thickness1*thickness1*thickness1) <= 4)
    {
      text("State = Good,Rate = A+",400,290);
      fill("green");
      textSize(50);
      text("Appointed",450,255);
      wall1.shapeColor = rgb(0, 255, 0);
      bullet1.velocityX = -15;
    }
  }

  textSize(30);
  fill("pink");

  bullet2.velocityX = 15;

  if(dup2.visible == true)
  {
  dup2.x = bullet2.x;
  }
  dup2.visible = true;


  if(bullet2.x >=1290)
  {
     text("State = Lethal,Rate = C+",400,480);
     fill("red");
     textSize(50);
     text("Rejected",450,550);
  }
  
  if(istouching(bullet2,wall2))
  {
    bullet2.velocityX = 0;
    
    0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2);

    if(0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2)>= 10)
    {
      wall2.shapeColor = rgb(255, 0, 0);
      wall2.x = 100000;
      bullet2.velocityX = 15;
    }
    if( 0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2)>= 4 && 0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2)< 10)
    {
      textSize(50);
      fill("yellow");
      text("Processing",450,450);
      fill("pink");
      textSize(30);
      text("State = Average,Rate = B+",400,480);
      wall2.shapeColor = rgb(230, 230, 0);
    }
  }
  else
  {
    bullet2.velocityX = random(15,25);
  }

  if(istouching(wall2,dup2))
  {
    dup2.visible = false;
    if( 0.5*weight2*speed2*speed2/(thickness2*thickness2*thickness2) <= 4)
    {
      text("State = Good,Rate = A+",400,480);
      fill("green");
      textSize(50);
      text("Appointed",450,445);
      wall2.shapeColor = rgb(0, 255, 0);
      bullet2.velocityX = -15;
    }
  }
}

function istouching(object1,object2)
{
  if(object1.x - object2.x <= object1.width/2 + object2.width/2 && 
    object2.x - object1.x <= object2.width/2 + object1.width/2 &&
    object1.y - object2.y <= object1.height/2 + object2.height/2 &&
    object2.y - object1.y <= object2.height/2 + object1.height/2)
 {
   return true;
 }
 else
 {
   return false;
 }
}
