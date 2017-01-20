/*USE NODE EVENT LOOP???*/

var events = {
    'direction': function (e) {
        var keyCode = e.keyCode || e.which,
            stringKey = keyCode.toString(),
            move = {
                '37': function (e) {
                    /*arrow left*/
                },
                '38': function (e) {
                    /*arrow up*/
                },
                '39': function (e) {
                    /*arrow right*/
                },
                '40': function (e) {
                    /*arrow down*/
                }
            }
        
        move[stringKey]()
    }
}

module.exports = events