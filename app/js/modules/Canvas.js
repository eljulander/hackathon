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

/*RANDOM WALLS EXPERIMENT*/

Canvas.prototype.wallGenerator = function (diff) {

    var i = 0

    for (i; i <= diff; i++) {

        var orient = Math.round(Math.random())

        if (orient === 0) {
            /*Vertical Orientation*/

            this.ctx.beginPath()
            this.ctx.moveTo(i * 50, 2)
            this.ctx.lineTo(i * 50, 200)
            this.ctx.stroke()

        } else if (orient === 1) {
            /*Horizontal Orientation*/

            this.ctx.beginPath()
            this.ctx.moveTo(2, i * 50)
            this.ctx.lineTo(200, i * 50)
            this.ctx.stroke()

        } else {
            console.warn("Program error")
        }

    }
}

Canvas.prototype.getMazeWalls = function (diff) {

    var numWalls = Math.ceil(Math.random() * 10),
        easyDiff = numWalls + 7,
        mediumDiff = numWalls + 17,
        hardDiff = numWalls + 27,
        difficulty = diff,
        that = this

    return function () {

        var wallGen = {
            'easy': () => {
                that.wallGenerator(easyDiff)
            },
            'medium': () => {
                that.wallGenerator(mediumDiff)
            },
            'hard': () => {
                that.wallGenerator(hardDiff)
            }
        }

        wallGen[difficulty]()
    }
}

/*END RANDOM*/

Canvas.prototype.drawStaticWalls = function(StaticWalls) {
    StaticWalls(this.ctx)
}

Canvas.prototype.clearFrame = function () {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height)
}

module.exports = Canvas
