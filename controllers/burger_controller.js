const express = require('express');

const router = express.Router();

// This will import the burger database to be used
const burger = require('../models/burger.js');

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = { //hbs = handlebars
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("/api/burger", function (req, res) {
    burger.insertOne([
        "burger", "devoured"
    ], [
        req.body.burger, req.body.devoured
    ], function (res) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function (req, res) {
    const burger = "id = " + req.params.id;

    console.log("burger", burger);

    burger.updateOne({
        devoured: req.body.devoured
    }), burger, function (res) {
        if (result.changerRows == 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    }
});


router.delete("/api/burger/:id", function (req, res) {
    const burger = "id = " + req.params.id;

    burger.deleteOne(burger, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export the routes to server.js to use
module.exports = router;

