//imports the "orm.js" file and sets it equal to the "orm" variable
var orm = require("../config/orm.js");

//creates the "burger" object with properties designed to select entries in a database,
//create new entries, update those entires, or delete those entries
var burger = {
    all: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.insertOne(cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete(condition, function(res) {
        cb(res);
      });
    }
  };

//allows the "burger" variable to be exported
  module.exports = burger;

  