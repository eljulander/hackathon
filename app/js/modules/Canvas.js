/*
Canvas prototype constructor
*/

function Canvas() {
    this.canvasElement = document.getElementById('myCanvas')
    this.ctx = this.canvasElement.getContext('2d')
    this.width = this.canvasElement.width
    this.height = this.canvasElement.height
}

/*Prototype method to draw the borders on the canvas.  Purely decorative*/

Canvas.prototype.drawBorders = function () {
    this.ctx.beginPath()
    this.ctx.moveTo(2, 2)
    this.ctx.lineTo(this.width - 2, 2)
    this.ctx.lineTo(this.width - 2, this.height - 2)
    this.ctx.lineTo(2, this.height - 2)
    this.ctx.lineTo(2, 2)
    this.ctx.stroke()
}

/*
Clear the frame for the framerate.
*/

Canvas.prototype.clearFrame = function () {
    this.ctx.clearRect(0, 0, this.width, this.height)
}

module.exports = Canvas
