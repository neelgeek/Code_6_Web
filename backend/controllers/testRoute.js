const express = require('express');
const router = express.Router();
const truckModel = require('../models/truckModel');

module.exports.controllerFunction = function(app) {

    router.post('/array', (req, res) => {
        let temp = req.body.arr;
        console.log((temp.length));
        var i = 0;
        temp.forEach(element => {
            i++;
            console.log(i);

        });
        res.send(temp);
    });

    router.post('/getTrips', (req, res) => {
        let orders = req.body.orders;
        let trucks = new truckModel();
        let trips = trucks.getTrips(orders);
        if (trips) {
            res.status(200).json(trips);
        } else {
            res.status(500).json({
                message: "No Trips Assigned"
            })
        }
    });



    app.use('/test', router);
}