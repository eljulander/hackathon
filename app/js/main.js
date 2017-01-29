/*EXTERNAL LIBRARIES*/
const path = require('path')

/*MODULES*/

const SCRIPT_DIR = __dirname + '/js/modules/',
    endgame = require(path.join(SCRIPT_DIR, 'endgame')),
    Canvas = require(path.join(SCRIPT_DIR, 'Canvas')),
    Enemy = require(path.join(SCRIPT_DIR, 'Enemy')),
    Player = require(path.join(SCRIPT_DIR, 'Player'))

/*OBJECTS*/

document.querySelector('canvas').width = window.innerWidth
document.querySelector('canvas').height = window.innerHeight

var canvas = new Canvas(),
    player = new Player(),
    enemy = new Enemy(canvas.width, canvas.height)

/*Move player controls*/
player.movePlayer()

/*FRAME RATE*/

function frameRate() {

    canvas.clearFrame()
    canvas.drawBorders()

    player.drawPlayer(canvas.ctx)
    enemy.drawEnemy(canvas.ctx)

    player.updatePlayerPosition()
    enemy.updateEnemyPosition()

    player.collision(canvas.width, canvas.height)
    enemy.collision(canvas.width, canvas.height)


    /*Pass into the function the positional data of the player and the enemy.*/
    endgame(player, enemy)
}

window.inter = setInterval(frameRate, 10)
