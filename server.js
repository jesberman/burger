//import the necessary node modules
var express = require("express");
var bodyParser = require('body-parser');

//set an "app" variable that is equal to the express module
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//set the port to 8080
var PORT = process.env.PORT || 8080;

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});