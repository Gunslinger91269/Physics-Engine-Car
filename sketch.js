const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){
  track = loadImage("images/track.jpg")
  car1Image = loadImage("images/car1.png")
  car2Image = loadImage("images/car2.png")
  car3Image = loadImage("images/car3.png")
  car4Image = loadImage("images/car4.png")
  ground = loadImage("images/ground.png")
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  engine = Engine.create()
  world = engine.world

  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  ground1a = Bodies.rectangle(displayWidth/2,displayHeight,displayWidth,20,{isStatic:true})

}


function draw(){

  Engine.update(engine)

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    clear();
    game.end();
  }
}