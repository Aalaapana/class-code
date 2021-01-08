class Player{
    constructor(){
        this.distance = 0
        this.name = null
        this.index = null
        this.rank = 0
    }
    getCount(){
        var countRef = database.ref('playerCount')
        countRef.on("value",function(data) {
                playerCount  = data.val();
        })
    }
    static getCarsAtEnd(){
        var Ref = database.ref('carsAtEnd')
        Ref.on("value",function(data) {
                carsAtEnd  = data.val();
        })
    }
    static updateCarsAtEnd(x){
        database.ref('/').update({
            carsAtEnd: x
        });
    }
    //updating the playername
    /*node
        gameState
        playerCount
        players
         player1
            name
            distance
         player2
         player3
  */

    update(){
        var playerIndex = "players/player" + this.index        // player1, player2

        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });
    }
    /*player1:
        name: vyubk
        distance:6987
      player2:
        name:
        distance:8938
*/
    //updating playercount

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }
    //getting playercount
   // player1 = new Player()
   //player2 = new Player()
   //player2.updateCount()
  // Player.getPlayerInfo()
    static getPlayerInfo(){
        var playerref = database.ref('players');
        playerref.on("value",(data)=>{
            allPlayers = data.val()
        })
    }

    updateRank(){
        var playerIndex = "players/player" + this.index        // player1, player2

        database.ref(playerIndex).update({
            rank:this.rank
        });

    }


}


























