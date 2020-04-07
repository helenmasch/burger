var express = require("express");
var burgers = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burgers.select(function(data) {
        var hbsObject = {
            burgers:data
        };
        console.log(data)
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burgers.insert(req.body.burger_name, function(data){
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    burgers.update(id, function(){
        res.redirect("/");
    });
});

module.exports = router;