var express = require('express');
var route = express.Router();
const fs = require('fs');
const farmerModel = require('../models/farmerModel');
const mongoose = require('mongoose');
const protect = require('../middlewares/authProtected');

module.exports.controllerFunction = function(app) {

    route.post('/produce', (req, res) => {

        var details = {
            _id: mongoose.Types.ObjectId(),
            farmerid: mongoose.Types.ObjectId(req.session.user._id),
            crop: req.body.crop,
            type: req.body.type,
            quantity: req.body.quant,
            price: req.body.price
        }
        console.log(details);
        const farmermodel = new farmerModel();
        farmermodel.save(details).then(response => {
            res.status(200).json({ response });
        }).catch(err => {
            res.status(500).send(err);
        });


    });




    route.get('/produce', (req, res) => {
        const farmermodel = new farmerModel();

        details = {
            cropname: req.query.name,
            type: req.query.type,
            quantity: req.query.quant

        }
        farmermodel.find(details).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });

    });




    app.use('/farmerProtected', protect.functionToCheckIfUserIsFarmer, route);

}