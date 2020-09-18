//Keeping the connection in a seperate module allows it to be required by all other files
const connection = require('connection.js');

const orm = {
    all: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    createNew: function (table, cb) {
        var queryString = "INSERT INTO " + table;

    },
    // The burger arg is in place for the router *req.params.?*
    // This function will update the the devour BOOLEAN
    update: function (table, devoured, burger, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += devoured
        queryString += " WHERE ";
        queryString += burger;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

//This will Export the orm for burger.js
module.exports = orm;



//selectAll()
//insertOne()
//updateOne()