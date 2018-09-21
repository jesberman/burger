//defines the "printQuestionMarks" function
function printQuestionMarks(num) {
    //creates an empty array
    var arr = [];
    //begins a for loop that pushes the results into the array "arr"
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

//imports the connection.js file and sets it equal to the new "connection" variable
var connection = require("./connection.js");

//creates the "orm" object, and sets as its properties several critical methods
var orm = {
    //defines the "selectAll" method
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    //defines the "insertOne" function, which serves to place a new entry into the "burgers" database
    insertOne: function (cols, vals, cb) {
        //defines the "queryString" variable, which begins puts together the MySQL code necessary
        //to insert new data into the database
        var queryString = "INSERT INTO burgers";

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    //defines the "update" function, which is used to change the values of particular entries
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
};

//allows the "orm" variable to be exported
module.exports = orm;
