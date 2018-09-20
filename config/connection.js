
var mysql = require('mysql');



var connection = mysql.createConnection({
    
    host: "localhost",

    // Port
    port: 3306,

    //  username
    user: "root",

    //  password
    password: "Bloodraven36",
    database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    connection = mysql.createConnection({
        host: "localhost",
        // Port
        port: 3306,
        //  username
        user: "root",
        //  password
        password: "Bloodraven36",
        database: "burgers_db"
    }

    )

}



connection.connect(function (err) {
    if (err) throw err;
    //runs the "afterConnection" function
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
