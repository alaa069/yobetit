const pi = require('../lib/Pi');

var PiManager = {

    postPi: function(req, res, next){
        var number = req.body.pi
        if (isNaN(number)){
            res.json({message: number + " is not a number", error: true});
        } else {
            if(number > 0) res.json({message: pi.getPi(Number(number)), error: false});
            else if (number==0) res.json({message: 3, error: false});
            else res.json({message: number + " must not be negative", error: true});
        }
    }

}

module.exports = PiManager;