var orm = require("../config/orm.js");

var burgers = {
    select: function(cb) {
        orm.select(`burgers`, function(res) {
            cb(res);
        });
    },
    insert: function (cols, vals, cb) {
        orm.insert(`burgers`, cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update(`burgers`, objColVals, condition, function (res) {
            cb(res);
            console.log ("Is this working");
        });
    }
}

module.exports =  burgers;