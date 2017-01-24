function Player() {
    this.width = 10
    this.height = 10
    this.x = 25
    this.y = 25
    this.xMotionSpeed = 0
    this.yMotionSpeed = 0
    this.radius = 10
}

Player.prototype.drawPlayer = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

Player.prototype.updatePlayerPosition = function () {
    this.x += this.xMotionSpeed
    this.y += this.yMotionSpeed
}

Player.prototype.collision = function (cwidth, cheight) {

    var xRad = this.x + this.xMotionSpeed,
        yRad = this.y + this.yMotionSpeed

    if (xRad > cwidth - this.radius || xRad < this.radius) this.xMotionSpeed = -this.xMotionSpeed
    if (yRad > cheight - this.radius || yRad < this.radius) this.yMotionSpeed = -this.yMotionSpeed
}

Player.prototype.movePlayer = function () {

    var that = this

    document.onkeydown = function (e) {

        /*To make a static speed instead of a steady acceleration*/

        /*
        that.xMotionSpeed = 0
        that.yMotionSpeed = 0
        */

        let keyCode = e.keyCode || e.which,
            stringKey = keyCode.toString(),
            move = {
                '37': function (e) {
                    /*arrow left*/
                    that.xMotionSpeed = that.xMotionSpeed - 2
                },
                '38': function (e) {
                    /*arrow up*/
                    that.yMotionSpeed = that.yMotionSpeed - 2
                },
                '39': function (e) {
                    /*arrow right*/
                    that.xMotionSpeed = that.xMotionSpeed + 2
                },
                '40': function (e) {
                    /*arrow down*/
                    that.yMotionSpeed = that.yMotionSpeed + 2
                }
            }

        move[stringKey]()
    }

    document.onkeyup = function (e) {

        that.xMotionSpeed = 0
        that.yMotionSpeed = 0

    }
}

module.exports = Player
