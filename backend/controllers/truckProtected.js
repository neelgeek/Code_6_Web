const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const truckCompanyModel = require('../models/truckcompModel');
const truckModel = require('../models/truckModel');


module.exports.controllerFunction = function(app) {


    router.get('/getTrucks', (req, res) => {
        const trucks = new truckCompanyModel();

        trucks.getTrucks().then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });

    });

    router.post('/truckLogin', (req, res) => {

        var number = req.body.trucknum;
        var pass = req.body.password;

        const truck = new truckCompanyModel();
        truck.findOneTruck(number).then(response => {
            if (pass === response.password) {
                res.status(200).json({ message: true });
            } else {
                res.status(200).json({ message: false });
            }
        }).catch(err => {
            res.status(500).json(err.message);
        });

    });

    router.patch('/updateLoc', (req, res) => {
        id = req.body.id;
        loc = req.body.loc;

        var truck = new truckModel();
        truck.updateLoc(id, loc).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            })
        });
    });

    router.patch('/cleartrip', (req, res) => {
        let truck = new truckModel();

        let id = req.body.id;
        truck.clearTrips(id).then(response => {
            res.send(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    });

    router.post('/getTrips', (req, res) => {
        let orders = req.body.orders;
        let trucks = new truckModel();
        let trips = trucks.getTrips(orders);
        if (trips) {
            res.status(200).json(trips);
        } else {
            res.status(500).json({
                message: "Error Fetching Trucks"
            })
        }
    });





    app.use('/truck', router);

}