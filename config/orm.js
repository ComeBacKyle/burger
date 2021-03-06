//Keeping the connection in a seperate module allows it to be required by all other files
const connection = require('../config/connection.js');

const orm = {
    //This function will pull up all the burgers
    all: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    // This creates a new burger
    createNew: function (table, burger_name, devoured, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += "VALUES (";
        queryString += burger_name;
        queryString += devoured;
        queryString += ")";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);

        });

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
    },
    delete: function (table, burger, cb) {
        const queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += burger;

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