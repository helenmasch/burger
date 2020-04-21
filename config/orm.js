var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(tableName, cols, vals, cb) {
        var queryString = `INSERT INTO ??  (??, ??) VALUES (?, ?)`;

      var statement = connection.query(queryString, [tableName, cols[0],cols[1], vals[0], vals[1]],function(err, result){
            if(err) {
                throw err;
            }
            cb(result);
        });
        console.log(statement.sql)
    },
    // Now updates the devoured boolean for each of the selected burgers
    updateOne: function(tableName, cols, vals, cb) {
        var queryString = `UPDATE ?? SET ?? = ? WHERE ?? = ?` ;

        
       var statement = connection.query(queryString,[tableName, cols[0], vals[0], cols[1], vals[1]], function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });

        console.log(statement.sql)
    }
};
module.exports = orm;