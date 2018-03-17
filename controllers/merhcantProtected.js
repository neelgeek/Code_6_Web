const express = require('express');
const router = express.Router();
const authProtected = require('../middlewares/authProtected');
const productModel = require('../models/productModel');
const maps = require('google-distance');

module.exports.controllerFunction = function(app) {

    router.post('/product/:id', (req, res) => {

        var details = {
            quantity: req.body.quantity,
            district: "1401,Amrut Paradise,Manisha Nagar,Kalwa,Thane",
            produce_id: req.params.id
        }

        let product = new productModel();

        product.viewProduct(details).then(response => {

            maps.get({
                origin: response.transportInfo.origin,
                destination: response.transportInfo.destination
            }, (err, data) => {
                if (data) {
                    distance = data.distanceValue / 1000;
                    distanceCost = distance * 25;
                    response.costInfo.transport = distanceCost;
                    res.status(200).json(response);
                }
                if (err) {
                    res.status(500).json({
                        message: "Location Error"
                    })
                }
            });

        }).catch(err => {
            res.status(500).json({
                message: err.message
            })
        });

    });

    app.use('/userProtected', router);
}