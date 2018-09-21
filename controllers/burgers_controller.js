//imports the express module
var express = require("express");

//imports the burger.js file and sets it equal to the "burger" variable
var burger = require("../models/burger.js");

//sets the "router" variable
var router = express.Router();

//sets the home page of the app as a get requst, displaying the index.handlbars file
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", { burgers: data });
    });
});

//sets the "/api/new" route as a post route capable of creating new entries in the database
router.post("/api/new", function (req, res) {
    console.log(req.body);
    burger.create(["burger_name", "devoured"], [
        req.body.burger_name, "0"
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

//sets the "/api/devour/:id" route as a put route capable of altering corresponding data of specific entries
router.put("/api/devour/:id", function (req, res) {
    console.log("Body: " + req.body);
    console.log("burger_controller" + req.params.id);
    burger.update(req.body, "id =  " + req.params.id, function (result) {
        console.log("updated?  " + result);
        res.sendStatus(200)
    });
});

//allows the "router" variable to be exported
module.exports = router;

