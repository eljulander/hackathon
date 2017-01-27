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

/*RANDOM WALLS EXPERIMENT*/

/*
The random walls is to be used with a maze game time.
The application currently does not have the support for
a maze game type.
*/

/*
The following method is used to draw the walls.  It is
used with the main.js file.
*/

Canvas.prototype.wallGenerator = function (numWalls) {

    var i = 0

    for (i; i <= numWalls; i++) {

        /*1 or 0?*/
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
            console.warn('Program error')
        }

    }
}

/*
This method is to get a preset of the random maze walls.
This is so that there is no random spontaneous walls
during the framerate.
*/

Canvas.prototype.getMazeWalls = function (diff) {

    var numWalls = Math.ceil(Math.random() * 10),
        easyDiff = numWalls + 7,
        mediumDiff = numWalls + 17,
        hardDiff = numWalls + 27,
        difficulty = diff,
        that = this

    /*
    The following function needs to get a preset of walls
    so that it is not messed up during the framerate.  This
    is to be used for the wall generator.
    */

    that.wallGenerator(easyDiff)

    wallGen[difficulty]()

}

/*END RANDOM*/

/*
Used for drawing static walls and not random walls.
*/

Canvas.prototype.drawStaticWalls = function (StaticWalls) {
    StaticWalls(this.ctx)
}

/*
Clear the frame for the framerate.
*/

Canvas.prototype.clearFrame = function () {
    this.ctx.clearRect(0, 0, this.width, this.height)
}

module.exports = Canvas
