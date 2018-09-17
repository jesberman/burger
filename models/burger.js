var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.  (Hector says to get rid of some of the things on line 11)
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


  module.exports = burger;

  