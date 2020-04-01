var orm = require("../config/orm.js");

var burgers = {
    select: function(cb) {
        orm.selectAll(`burgers`, function(res) {
            cb(res);
        });
    },
    insert: function (cols, vals, cb) {
        orm.insertOne(`burgers`, cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.updateOne(`burgers`, objColVals, condition, function (res) {
            cb(res);
            console.log ("This is working");
        });
    }
}

module.exports =  burgers;