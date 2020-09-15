const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aj_112491',
    database: 'burgers_db'
});

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
// app.get('/', function (req, resp) {
//     connection.query("SELECT * FROM burger_db", function (error, rows, fields) {
//         if (error) {
//             console.log("Error with the query!")
//         } else {
//             console.log("Successful Query");
//         }
//     });
// });

app.listen(8080);
