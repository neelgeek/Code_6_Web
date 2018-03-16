const express = require('express');
const router = express.Router();
const authProtected = require('../middlewares/authProtected');
const productModel = require('../models/productModel');

module.exports.controllerFunction = function(app) {

    router.post('/product/:id', (req, res) => {

        var details = {
            quantity: req.body.quantity,
            // district: req.session.user.district,
            produce_id: req.params.id
        }

        let product = new productModel();

        product.viewProduct(details).then(resposne => {
            res.status(200).json(resposne);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            })
        });

    });

    app.use('/userProtected', router);
}