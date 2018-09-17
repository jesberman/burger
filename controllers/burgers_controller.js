
var express = require("express");
var burger = require("../models/burger.js")
var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", { burgers: data });
    });
});

router.post("/api/new", function (req, res) {
    console.log(req.body);
    burger.create(["burger_name", "devoured"], [
        req.body.burger_name, "0"
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/devour/:id", function (req, res) {
    console.log(req.body);
    // burger.update(["devoured"], ["1"], "WHERE id =  " + req.params.ids,
    //var table= [
    //    "burgers"
    //];
    //var value =[
    //    req.body
    //];
    //var condition = "id = " + req.params.id;
    //var callback = (result) => {
    //    res.json({ id: result.insertId });

    //} 
    //burger.update(table, value, condition, callback);  
     burger.update({devoured: true},"id =  " + req.params.id), 
        function (result) {
           res.json({ id: result.insertId });
        };
});

module.exports = router;

