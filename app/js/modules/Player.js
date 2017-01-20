function Player() {
    this.width = 10
    this.height = 10
    this.x = 50
    this.y = 50
    this.xMotionSpeed = 2
    this.yMotionSpeed = 2
    this.radius = 10
}

Player.prototype.drawPlayer = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

Player.prototype.updatePlayerPosition = function() {
    this.x += this.xMotionSpeed
    this.y += this.yMotionSpeed
}

module.exports = Player