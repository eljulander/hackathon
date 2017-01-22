function drawStaticWalls(ctx) {
    ctx.beginPath()
    ctx.moveTo(50, 2)
    ctx.lineTo(50, 200)
    ctx.stroke()
}

module.exports = drawStaticWalls
