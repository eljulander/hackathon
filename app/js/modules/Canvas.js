function Canvas() {
    this.canvasElement = document.getElementById("myCanvas")
    this.ctx = this.canvasElement.getContext("2d")
    this.width = this.canvasElement.width
    this.height = this.canvasElement.height
}

Canvas.prototype.drawBorders = function () {
    this.ctx.beginPath()
    this.ctx.moveTo(2, 2)
    this.ctx.lineTo(this.width - 2, 2)
    this.ctx.lineTo(this.width - 2, this.height - 2)
    this.ctx.lineTo(2, this.height - 2)
    this.ctx.lineTo(2, 2)
    this.ctx.stroke()
}

Canvas.prototype.getMazeWalls = function (diff) {

    var numWalls = Math.ceil(Math.random() * 10),
        easyDiff = numWalls += 7,
        mediumDiff = numWalls += 12,
        hardDiff = numWalls += 17,
        difficulty = diff,
        that = this

    return function () {

        var i = 0,
            wallGen = {
                'easy': function () {

                    for (i; i <= easyDiff; i++) {
                        that.ctx.beginPath()
                        that.ctx.moveTo(i*50, 2)
                        that.ctx.lineTo(i*50, 200)
                        that.ctx.stroke()
                    }

                },
                'medium': function () {
                    mediumDiff
                },
                'hard': function () {
                    hardDiff
                }
            }

        wallGen[difficulty]()
    }
}

Canvas.prototype.clearFrame = function () {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height)
}

module.exports = Canvas
