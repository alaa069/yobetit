const request = require("request");

var countryManager = {

    getOneCountry: function(req, res, next){
        var country = req.body.country
        res.json(getCountry(country));
    },

    getManyCountry: function(req, res, next){
        var country = req.body.countries
        var countries = country.split(",")
        var List = []
        for(var i=0; i<countries.length; i++){
            List.push(getCountry(countries[i].replace(/^\s+/g, '')))
        }
        while(List === undefined) {
            require('deasync').runLoopOnce();
        }
        res.json(List)
    }

}

function getCountry (country){
    var source;
    var options = { method: 'GET',
        url: 'https://restcountries.eu/rest/v2/name/'+country,
        headers: 
        { 'cache-control': 'no-cache' }
    };
    
    request(options, function (error, response, body) {
        if (error) source=({message: error, error: true});
        else{
            if(JSON.parse(body).length!=undefined){
                source=({message: JSON.parse(body)[0], error: false});
            }else{
                source=({message: {name : 'Opps not country found with name '+ country, flag : "/images/flag.png"}, error: true});
            }
        }
    });

    while(source === undefined) {
        require('deasync').runLoopOnce();
    }
    return source;
}

module.exports = countryManager;