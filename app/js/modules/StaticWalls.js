/*
To be used if a maze game is to be made.
*/

function drawStaticWalls(ctx) {
    ctx.beginPath()
    ctx.moveTo(50, 2)
    ctx.lineTo(50, 200)
    ctx.stroke()
}

module.exports = drawStaticWalls
