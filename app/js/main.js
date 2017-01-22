/*EXTERNAL LIBRARIES*/
const path = require('path')

/*MODULES*/

const SCRIPT_DIR = __dirname + '/js/modules/',
    StaticWalls = require(path.join(SCRIPT_DIR, 'StaticWalls')),
    Canvas = require(path.join(SCRIPT_DIR, 'Canvas')),
    Player = require(path.join(SCRIPT_DIR, 'Player'))

/*OBJECTS*/

var canvas = new Canvas(),
    player = new Player(),
    diff = 'easy'

//    drawMazeWalls = canvas.getMazeWalls(diff)

/*FRAME RATE*/

player.movePlayer()

function frameRate() {
    canvas.clearFrame()
    canvas.drawBorders()

    canvas.drawStaticWalls(StaticWalls)

    /*To randomly draw maze walls - maybe not the
      best option for gameplay*/
//    drawMazeWalls()

    player.drawPlayer(canvas.ctx)
    player.updatePlayerPosition()
    player.collision(canvas.width, canvas.height)
}

setInterval(frameRate, 10)
