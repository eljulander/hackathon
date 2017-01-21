/*EXTERNAL LIBRARIES*/
const path = require('path')

/*MODULES*/

const SCRIPT_DIR = __dirname + '/js/modules/',
    Canvas = require(path.join(SCRIPT_DIR, 'Canvas')),
    Player = require(path.join(SCRIPT_DIR, 'Player'))

/*OBJECTS*/

var canvas = new Canvas(),
    player = new Player()

/*FRAME RATE*/

player.movePlayer()

function frameRate() {
    canvas.clearFrame()
    canvas.drawBorders()
    player.drawPlayer(canvas.ctx)
    player.updatePlayerPosition()
    player.collision(canvas.width, canvas.height)
}

setInterval(frameRate, 10)
