import {game} from "../pages/game/main.js"
document.addEventListener("keyup", function(e){

    console.log(e.keyCode)

    if (e.keyCode == 38) // arrow up
    {
        game.moveMatka(1,1)
    }
    else if (e.keyCode == 40) // arrow down
    {
        game.moveMatka(1,0)
    }
    else if(e.keyCode == 65) // a 
    {
        game.moveMatka(0,1)
    }
    else if (e.keyCode == 90) // z
    {
        game.moveMatka(0,0)
    }})
  
  