const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const transactionModel = require('../models/transactionModel');
var braintree = require("braintree");
const truckmodel = require('../models/truckModel');

var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    // Use your own credentials from the sandbox Control Panel here
    merchantId: 'ht7w76kny3r63525',
    publicKey: 's8qst7nsvxyt58kq',
    privateKey: '3b9942f09a0285c0ba64c0d958f49e33'
});

exports.controllerFunction = function(app) {

    router.post('/create', (req, res) => {
        let data = req.body;
        let details = {
            merchant_id: req.session.user._id,
            transport_id: data.transportInfo.truckId,
            crop_details: data.productinfo,
            farmer_amount: data.costInfo.crop,
            transport_amount: data.costInfo.transport,
            merchant_otp: null,
            farmer_otp: null
        };
        let order = new transactionModel();
        order.createOrder(details).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    });



    router.post('/checkout', function(req, res, next) {
        console.log(req.body)
        let transaction = new transactionModel();
        let nonceFromTheClient = req.body.paymentMethodNonce;
        let value = Math.floor(req.body.amount);
        let orderId = req.body.orderId;
        let truckId = req.body.truckId;
        let origin = req.body.origin;
        let destination = req.body.destination;
        let tripinfo = { origin, destination };

        var newTransaction = gateway.transaction.sale({
            amount:String(value) ,
            paymentMethodNonce: nonceFromTheClient,
            options: {
                // This option requests the funds from the transaction
                // once it has been authorized successfully
                submitForSettlement: true
            }
        }, function(error, result) {
            console.log(result)
            if (result.success) {
                let orderDet = {
                    id: orderId,
                    status: 'Placed',
                    torigin: origin,
                    tdest: destination
                }
                transaction.updateOrder(orderDet).then(updatedOrder => {
                    let transac_details = {
                        transaction_id: result.id,
                        order_id: mongoose.Types.ObjectId(updatedOrder._id),
                        user_id: mongoose.Types.ObjectId(req.session.user.id),
                        amount: value,

                    }
                    transaction.createTransaction(transac_details)
                        .then(newTransaction => {
                            let details = {
                                id: truckId,
                                status: 'Assigned',
                                trip: orderId
                            }
                            transaction.updateTruckStatus(details).then(truck => {
                                res.status(200).json(result);
                            }).catch(err => {
                                throw err;
                            })
                        })
                        .catch(err => {
                            res.status(500).json({
                                message: err.message
                            });
                        })
                }).catch(err => {
                    res.status(500).json({
                        message: err.message
                    });

                });

            } 
             else{
                res.status(500).json({
                    message: error.message
                });
            }
        });
    });


    router.post('/findTruck', (req, res) => {
        let details = {
            weight: req.body.quantity,
            location: req.body.location,
            status: 'Unassigned'
        }

        let truck = new transactionModel();
        return truck.findTruck(details).then(response => {
            console.log(response)
            res.status(200).json(response[0]);
        }).catch(err => {   
            res.status(500).json({
                message: err.message
            })
        });

    });

    //route only for testing, do not use
    router.post('/updatestat', (req, res) => {
        let details = {
            id: req.body.id,
            status: req.body.status,
            trip: req.body.trip
        }

        let tran = new transactionModel();

        tran.updateTruckStatus(details).then(resp => {
            res.status(200).json(resp);
        }).catch(err => {
            res.status(500).send(err);
        });
    });





    app.use('/order', router);
}