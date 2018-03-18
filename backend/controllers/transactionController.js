const express = require('express');
const router = express.Router();
const transactionModel = require('../models/transactionModel');
var braintree = require("braintree");

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
                crop_details: data.productinfo,
                farmer_amount: data.costInfo.crop,
                transport_amount: data.costInfo.transport
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


            var nonceFromTheClient = req.body.paymentMethodNonce;
            var value = req.body.amount;

            var newTransaction = gateway.transaction.sale({
                amount: value,
                paymentMethodNonce: nonceFromTheClient,
                options: {
                    // This option requests the funds from the transaction
                    // once it has been authorized successfully
                    submitForSettlement: true

                }
            }, function(error, result) {
                if (result) {
                    res.send(result);
                } else {
                    res.status(500).send(error);
                }
            });


        });






        app.use('/order', router);
    } //sdasd