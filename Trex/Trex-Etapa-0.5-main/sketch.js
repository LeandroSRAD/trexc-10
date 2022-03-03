//criando variáveis
var trex,trexRunning;
var edges;
var ground,groundImage,invisibleGround;
// carrega as mídias para dentro do jogo (preload)
function preload(){
  trexRunning = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")



}
//A função de setup faz as configurações
function setup(){
  createCanvas(600,200);
  edges = createEdgeSprites();
  ground = createSprite(300,170,600,2);
  ground.addImage("ground",groundImage);
  //criando o trex
  trex = createSprite (50,160,20,50);
  trex.addAnimation("running",trexRunning);
  trex.scale = 0.5;
  invisibleGround = createSprite(300,190,600,2)
  invisibleGround.visible = false;   
}

//movimento do jogo (draw)
function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  //registrando a posição y do trex
  ground.velocityY = -10         
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space") && trex.y > 164){
    trex.velocityY = -2; 
  }
    
  
  gravity(); 
  text ("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
 //impedir que o trex caia
  trex.collide(invisibleGround);
  drawSprites();
}
function gravity(){
 trex.velocityY+=0.5; 
}