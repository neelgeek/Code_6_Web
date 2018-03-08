//1.2 if user is not loggedIn we will show him all doubts 
var express = require('express');
var route = express.Router();
const fs = require('fs');
const userModel = require('../models/userModel');
const mongoose = require('mongoose');
// A route defined now we may use as mini app
//This is what express offers



module.exports.controllerFunction = function(app) {


    route.get('/', (req, res) => {
        res.send("hello")
            //use this coding guide lines
    });

    route.post('/signup/farmer', (req, res, next) => {

        var userDetails = {
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            aadhar: req.body.aadhar,
            mobile: req.body.mobile,
            lang: req.body.lang,
            addr1: req.body.addr1,
            taluka: req.body.taluka,
            district: req.body.district,
            state: req.body.state,
            pincode: req.body.pincode
        }
        const newuser = new userModel();
        newuser.save_farmer(userDetails).then(response => {
            res.status(200).json({
                message: "Farmer Registered"
            });
        });

    });



    route.post('/signup/merchant', (req, res, next) => {

        var userDetails = {
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            aadhar: req.body.aadhar,
            mobile: req.body.mobile,
            lang: req.body.lang,
            addr1: req.body.addr1,
            taluka: req.body.taluka,
            district: req.body.district,
            state: req.body.state,
            pincode: req.body.pincode
        }
        const newuser = new userModel();
        newuser.save_merchant(userDetails).then(response => {
            res.status(200).json({
                modle: response
            });
        });

    });







    app.use('/', route);



}