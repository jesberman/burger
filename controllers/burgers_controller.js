
var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
    //    burger.all(function(data) {
    //      var hbsObject = {
    //       cats: data
    //    };
    //     console.log(hbsObject);
    res.render("index", {

    });
});
