  var garden,rabbit;
  var gardenImg,rabbitImg;
  var apple , appleImg;
  var leaf,leafImg;
  var score=0;
  var rand;

  function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeleaf.png")
  }

  function setup(){
  createCanvas(400,400);
              
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  }

  function draw() {
  background(0);
              
  edges= createEdgeSprites();
  rabbit.collide(edges);
              
  if(keyDown("left")){
  rabbit.velocityX = -3;
  }
  if(keyDown("right")){
  rabbit.velocityX = 3;
  }

  rand = Math.round(random(1,2));

  if(frameCount % 80 == 0){
  if(rand==1){
  createApples();
  }
  else{
  createLeaves();
  }
  
  }
            
  drawSprites();
  }

  function createApples(){
  apple = createSprite(random(20,360),20,20);
  apple.addImage(appleImg);
  apple.scale=0.05;
  apple.velocityY=2;
  }

  function createLeaves(){
  leaf = createSprite(random(10,370),20,20);
  leaf.addImage(leafImg);
  leaf.scale=0.05;
  leaf.velocityY=2;
  }