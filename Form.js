class Form{
constructor(){
    this.box = createInput("Name");
    this.button = createButton("Play");
    this.greeting = createElement('h3')
    this.reset = createButton("reset")
    
}

display(){
    var title = createElement('h2')
    title.position(150,10)
    title.html("Car Racing Game")

    this.box.position(150,200)

    this.button.position(150,300)

    this.reset.position(30,30)
 
        /*button.mousePressed(()=>{



    })
function reset(){
        do resetting
    }*/
    
    this.button.mousePressed(() => {
        this.box.hide()
        this.button.hide()

        player.name = this.box.value();
        playerCount = playerCount + 1
        player.index = playerCount
        player.update()
        player.updateCount(playerCount)

        this.greeting.html("Hello  " + player.name)
        this.greeting.position(150,200)

    } )

    this.reset.mousePressed(() =>{
        var ref = database.ref('/')
        ref.set({
            gameState:0,
            playerCount:0,
            carsAtEnd:0
        })
        location.reload()

    })

}
     hide(){
         this.box.hide()
         this.button.hide()
         this.greeting.hide()
}
}