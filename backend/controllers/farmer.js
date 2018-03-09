var express = require('express');
var route = express.Router();
const fs = require('fs');
const userModel = require('../models/userModel');
const mongoose = require('mongoose');


module.exports.controllerFunction = function(app) {

    route.get('/produce', (req, res) => {
        res.status(200).json({
            message: "GET on Produce"
        });
    });




    route.post('/produce', (req, res) => {
        res.status(200).json({
            message: "POST on Produce"
        });
    });


    app.use('/', route);
}