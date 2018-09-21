//import the "mysql" node module
var mysql = require('mysql');

//set a "connection" variable
var connection;

//if else statement.  If attempting to contact the heroku deployed site, direct the 
//user towards it.  Otherwise, directs the user toward the locally hosted server on port 3306
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
    connection = mysql.createConnection({
        host: 'localhost',
        // Port
        port: 3306,
        //  username
        user: 'root',
        //  password
        password: 'Bloodraven36',
        database: 'burgers_db'
    });
};
//informs the user via a console log whether a connection to the server has been established
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});
//allows the "connection" variable to be exported
module.exports = connection;
