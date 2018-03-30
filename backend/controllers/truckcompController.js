const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const truckCompanyModel = require('../models/truckcompModel');


module.exports.controllerFunction = function(app) {

    route.post('/signup', (req, res) => {
        console.log(req.body)

        var details = {
            companyName: req.body.cname,
            emailId: req.body.email,
            password: req.body.pass,
            ownername: req.body.oname,
            phnumer: req.body.num,
            city: req.body.city,
            district: req.body.dist,
            state: req.body.state
        }

        let newCompany = new truckCompanyModel();
        newCompany.save(details).then(response => {
            console.log(response)
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json(err);
        });


    });

    route.post('/signin', (req, res) => {
        email = req.body.mail;
        password = req.body.pass;

        const company = new truckCompanyModel();

        company.findOne(email).then(response => {

            if (password === response.password) {
                req.session.truckadmin = response;
                res.status(200).json({ message: true });
            } else {
                res.status(403).json({ message: false });
            }
        }).catch(err => {
            res.status(403).json(err.message);
        });

    });

    route.get('/getTrucks', (req, res) => {
        const trucks = new truckCompanyModel();

        trucks.getTrucks().then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });

    });

    route.post('/truckLogin', (req, res) => {

        var number = req.body.trucknum;
        var pass = req.body.password;

        const truck = new truckCompanyModel();
        truck.findOneTruck(number).then(response => {
            if (pass === response.password) {
                res.status(200).json({ message: true });
            } else {
                res.status(403).json({ message: false });
            }
        }).catch(err => {
            res.status(500).json(err.message);
        });

    });






    app.use('/truckCompany', route);

}