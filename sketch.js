var database;
var gameState=0, playerCount=0;
var car1,car2,cars
var form, player, game;
var allPlayers;
var carsAtEnd = 0;

function preload(){
  car1Image = loadImage("car1.png")
  car2Image = loadImage("car2.png")
  track = loadImage("track.jpg")
}

function setup() {
  createCanvas(displayWidth-50,displayHeight-50);
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()
  
}


function draw() {
  background("grey")
  if(playerCount === 2){
    game.update(1)
  }
  if(gameState === 1){
    //clear();
    game.play()
  }
  if(gameState === 2){
    game.end()
  }
 

}


