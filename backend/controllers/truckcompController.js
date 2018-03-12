const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const truckCompanyModel = require('../models/truckcompModel');

module.exports.controllerFunction = function(app) {

    route.post('/truckcompany/signup', (req, res) => {
        var details = {
            _id: mongoose.Types.ObjectId(),
            cname: req.body.cname,
            emailid: req.body.email,
            password: req.body.pass,
            ownername: req.body.oname,
            phnumer: req.body.num,
            city: req.body.city
        }

        const newCompany = new truckCompanyModel();

        newCompany.save(details).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json(err);
        });


    });

    route.post('/truckCompany/signin', (req, res) => {
        email = req.body.mail;
        password = req.body.pass;

        const company = new truckCompanyModel();

        company.findOne(email).then(response => {

            if (password === response.password) {
                res.status(200).json({ message: true });
            } else {
                res.status(200).json({ message: false });
            }
        }).catch(err => {
            res.json(err.message);
        })

    });


    app.use('/', route);

}