//1.2 if user is not loggedIn we will show him all doubts 
const express = require('express');
const route = express.Router();
const fs = require('fs');
const userModel = require('../models/userModel');
const mongoose = require('mongoose');
const protect = require('../middlewares/authProtected')
// A route defined now we may use as mini app
//This is what express offers



module.exports.controllerFunction = function(app) {







    app.use('/farmerProtected', protect.functionToCheckIfUserIsFarmer, route);



}