var express = require("express");
var burgers = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burgers.select(function(data) {
        var hbsObject = {
            burgers:data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res){
    burgers.insertOne(req.body.burger_name), function(){
        res.redirect("/");
    };
});

router.put("/:id", function(req, res) {
    var condition = req.params,id;
    burgers.updateOne(condition, function(){
        res.redirect("/");
    });
});

module.exports = router;