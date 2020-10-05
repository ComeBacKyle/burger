const express = require("express");
const mysql = require("mysql");
const app = express();

//Connection information is set up.
//Keeping the connection in a seperate module allows it to be required by all other files
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Aj_112491',
        database: 'burgers_db'
    })
}

// This established the connection between the database
connection.connect(function (error) {
    if (error) {
        console.log('Error with the connection!');
    } else {
        console.log('Connected');
    }
    afterConnection();
});


function afterConnection() {
    connection.query("SELECT * FROM burgers", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

// Export connection
module.exports = connection;

