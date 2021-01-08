class Game{
    constructor(){}
    //getting the gameState from db
    getState(){
        var gsRef = database.ref('gameState')
        gsRef.on("value", function(data){
            gameState = data.val()
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        
        if(gameState === 0){
        //gameState =0 when are allplayers are not ready, 1 all the players logged in
        player = new Player()
        var playerCountRef = await database.ref('playerCount').once("value")
       //var playerCountRef  = database.ref('playerCount')
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val()
        }
        player.getCount()
        form = new Form();
        form.display()
    }
    car1 = createSprite(500,200)
    car2 = createSprite(700,200)  
    car1.addImage(car1Image);
    car2.addImage(car2Image); 
    cars=[car1,car2]

}
    

play(){
    form.hide()
    
    textSize(15);
    text("Game Has Started",400,200)
    Player.getCarsAtEnd()
    Player.getPlayerInfo()
    if(allPlayers !== undefined){
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
        var pos = 100;
        var index = 0//cars[0],cars[1]
        for (var plr in allPlayers){
            push()
            textSize(20)
            fill("white")
            text(allPlayers[plr].name + ": " + allPlayers[plr].distance,displayWidth-250,camera.position.y-pos);
            pop()
            pos=pos+40
           // cars[index].x = 
            cars[index].y = displayHeight -  allPlayers[plr].distance
            text(allPlayers[plr].name ,cars[index].x-20,cars[index].y+80)
            index = index + 1

            if(index === player.index){
                push()
                fill("red")
                ellipse(cars[index-1].x,cars[index-1].y,100,100)
                camera.position.y = cars[index-1].y
                camera.position.x = displayWidth/2
                pop()
            }        

        }
    }
    if(keyIsDown(UP_ARROW)&& player.index != null){        
        player.distance = player.distance+50
        player.update()
    }

    if(player.distance > 4100){
        
        carsAtEnd = carsAtEnd+1
        player.rank = carsAtEnd
        player.updateRank()
        Player.updateCarsAtEnd(carsAtEnd)
        gameState = 2
    }

    drawSprites()
}
 end(){
     console.log("game has ended and the rank is " + player.rank)
     for(var plr in allPlayers){
        if(allPlayers[plr].rank === 1){
            /*fill("black")
            textSize(35)
            text("Winner is"+ allPlayers[plr].rank,displayWidth/2,displayHeight/2)*/
            var msg = createElement('h1')
            msg.position(displayWidth/2 - 100,displayHeight/2)
            msg.html("Winner is  "+ allPlayers[plr].name)
        }
     }
     
 }    


    //anonymous methods
    
    
    // updating the db with gameState
    //starting the game


    

}