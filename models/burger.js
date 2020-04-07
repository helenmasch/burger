var orm = require("../config/orm.js");

var burgers = {
    select: function(cb) {
        orm.selectAll(`burgers`, function(res) {
            cb(res);
        });
    },
    insert: function (newBurger, cb) {
        orm.insertOne(`burgers`, ["burger_name", "devoured"], [newBurger, false], function (res) {
            cb(res);
        });
    },
    update: function (id, cb) {
        orm.updateOne(`burgers`, ["devoured", "id"], [true, id], function (res) {
            cb(res);
            console.log ("This is working");
        });
    }
}

module.exports =  burgers;