/*EXTERNAL LIBRARIES*/
const path = require('path')

/*MODULES*/

const SCRIPT_DIR = __dirname + '/js/modules/',
    StaticWalls = require(path.join(SCRIPT_DIR, 'StaticWalls')),
    Canvas = require(path.join(SCRIPT_DIR, 'Canvas')),
    Enemy = require(path.join(SCRIPT_DIR, 'Enemy')),
    Player = require(path.join(SCRIPT_DIR, 'Player'))

/*OBJECTS*/

document.querySelector('canvas').width = window.innerWidth
document.querySelector('canvas').height = window.innerHeight

var canvas = new Canvas(),
    player = new Player(),
    enemy = new Enemy(canvas.width, canvas.height),
    diff = 'easy'

//    drawMazeWalls = canvas.getMazeWalls(diff)

/*FRAME RATE*/

player.movePlayer()

function frameRate() {
    canvas.clearFrame()
    canvas.drawBorders()

    /*For the maze if I want to make a maze game*/
//    canvas.drawStaticWalls(StaticWalls)

    /*To randomly draw maze walls - maybe not the
      best option for gameplay*/
//    drawMazeWalls()

    player.drawPlayer(canvas.ctx)
    enemy.drawEnemy(canvas.ctx)
    player.updatePlayerPosition()
    enemy.updateEnemyPosition()
    player.collision(canvas.width, canvas.height)
    enemy.collision(canvas.width, canvas.height)
}

setInterval(frameRate, 10)
