const express = require('express');
const router = express.Router();
const transactionModel = require('../models/transactionModel');

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


    app.use('/order', router);
}