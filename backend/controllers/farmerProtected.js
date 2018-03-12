//1.2 if user is not loggedIn we will show him all doubts 
const express = require('express');
const route = express.Router();
const fs = require('fs');
const userModel = require('../models/userModel');
const mongoose = require('mongoose');
const protect = require('../middlewares/authProtected');
// A route defined now we may use as mini app
//This is what express offers



module.exports.controllerFunction = function(app) {


    route.delete('/delete/farmer', (req, res) => {
        let user = new userModel({});
        user.findOneAndDelete(req.session.user).then(deletedUser => {
                res.status(200).json({ deleted: true })
            })
            .catch(err => {
                res.status(204).json(err.message);
            })
    })

    route.put('/edit/farmer', (req, res) => {
        let user = new userModel({});
        let updatedFarmerDetails = req.body;
        user.findOneAndEdit(req.session.user, updatedFarmerDetails).then(editedUser => {
                res.status(200).json({ edited: true })
            })
            .catch(err => {
                res.status(204).json(err.message);
            })
    })




    app.use('/farmerProtected', protect.functionToCheckIfUserIsFarmer, route);



}