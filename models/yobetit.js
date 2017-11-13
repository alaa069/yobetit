const path = require("path");
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const mysql = require('mysql');

var databaseManager = {
    selectPLAYER: function (req, res, next) {

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'yobetit'
        });
        connection.connect();

        connection.query('SELECT * FROM Players P WHERE P.ID_player IN (SELECT ID_player from Favorite INNER JOIN Games ON Favorite.ID_game = Games.ID_game WHERE Games.type_game = "SLOT")', function (error, results, fields) {
            if (error) res.json({ message: error, error: true });
            else {
                res.json({ message: results, error: false })
            }
        });

        connection.end();
    }
}

module.exports = databaseManager;