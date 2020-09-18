const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    //This uses the same variables that are used in the orm
    create: function (burger_name, devoured, cb) {
        orm.create("burgers", burger_name, devoured, function (res) {
            cb(res);
        });
    },

    //Burger is used as a first arg to reference the *req.params.id*
    update: function (burger, devoured, cb) {
        orm.update("burgers", burger, devoured, function (res) {
            cb(res);
        });
    },

    delete: function (burger, cb) {
        orm.delete("burger", burger, function (res) {
            cb(res);
        });
    }
};

//Export the database function for the controllerburgers_controllers.js)
module.export = burger;