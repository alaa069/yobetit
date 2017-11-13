var slotMachineManager = {
    index: function(req, res, next){
        var Reel1 = ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"]
        var Reel2 = ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"]
        var Reel3 = ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"]
        var Result = [ randomReel(Reel1), randomReel(Reel2), randomReel(Reel3) ]
        res.json(SlotMachine(Result))
    }
}

function randomReel (Reel){
    return Reel[Math.floor(Math.random() * Reel.length)]
}

function SlotMachine (result){
    var source;
    var expression;
    var lemon = 0;
    var cherry = 0;
    var apple = 0;
    var banana = 0;
    for(var i=0; i<result.length; i++){
        if(result[i]== "cherry") cherry ++
        if(result[i]== "lemon") lemon ++
        if(result[i]== "apple") apple ++
        if(result[i]== "banana") banana ++
    }
    if(cherry==3) source=({Result: result, message: userWon("3 cherries"), error: false});
    else if(cherry==2) source=({Result: result, message: userWon("2 cherries"), error: false});
    else if(apple==3) source=({Result: result, message: userWon("3 apples"), error: false});
    else if(apple==2) source=({Result: result, message: userWon("2 apples"), error: false});
    else if(banana==3) source=({Result: result, message: userWon("3 bananas"), error: false});
    else if(banana==2) source=({Result: result, message: userWon("2 bananas"), error: false});
    else if(lemon==3) source=({Result: result, message: userWon("3 lemons"), error: false});
    else source=({Result: result, message: userWon("lost"), error: true});

    while(source === undefined) {
        require('deasync').runLoopOnce();
    }
    return source;
}
function userWon (expression){
    switch(expression) {
        case "3 cherries":
            return("won 50 coins")
            break;
        case "2 cherries":
            return("won 40 coins")
            break;
        case "3 apples":
            return("won 20 coins")
            break;
        case "2 apples":
            return("won 10 coins")
            break;
        case "3 bananas":
            return("won 15 coins")
            break;
        case "2 bananas":
            return("won 5 coins")
            break;
        case "3 lemons":
            return("won 3 coins")
            break;
        default:
            return("you lose!")
    }
}

module.exports = slotMachineManager;