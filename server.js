var express = require("express");
//var exphbs = require("express-handlebars");
//var mysql = require("mysql");
var bodyParser = require('body-parser');

var app = express();


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var PORT = process.env.PORT || 8080;



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// Import routes and give the server access to them.
var routes = require("./controllers/burgersController.js");

app.use(routes);
