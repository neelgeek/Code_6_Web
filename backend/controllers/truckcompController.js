const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');

module.exports.controllerFunction = function(app) {



    app.use('/truckCompany', route);

}