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


    route.post('/signup/', (req, res, next) => {

        var userDetails = {
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            password: req.body.pass,
            aadhar: req.body.aadhar,
            mobile: req.body.mobile,
            lang: req.body.lang,
            addr1: req.body.addr1,
            taluka: req.body.taluka,
            district: req.body.district,
            state: req.body.state,
            pincode: req.body.pincode,
            isFarmer: req.body.isfarmer
        }
        const newuser = new userModel();
        newuser.save(userDetails).then(response => {
            res.status(200).json({
                message: "Farmer Registered"
            });
        });

    });





    route.post('/signin', (req, res) => {
        var details = {
            number: req.body.number,
            isfarmer: req.body.isfarmer
        };
        var pass = req.body.pass;
        var user = new userModel();
        user.find(user).then(response => {
            console.log(response);

            if (response.password === String(pass)) {
                res.status(200).json({ message: "Sucess" });
            } else {
                res.status(200).json({ message: "Fail" });
            }

        }).catch(err => {
            res.status(500).json(err.message);
        })

    });







    app.use('/', route);



}