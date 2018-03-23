const express = require('express');
const router = express.Router();
const sharingModel = require('../models/sharingModel');


exports.controllerFunction = function(app) {

    router.post('/create', (req, res) => {
        let details = req.body;

        let newReq = new sharingModel();

        newReq.createShareReq(details).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });
    });


    router.post('/getRequests', (req, res) => {
        console.log(req.body);
        let date = new Date(req.body.date);
        date.setHours(0, 0, 0, 0);
        console.log(date);
        let request = new sharingModel();

        request.getOrders(date).then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(500).json({
                message: err
            });
        });
    });

    router.post('/postGroups', (req, res) => {
        let assigned = req.body.Assigned;
        let shareModel = new sharingModel();

        shareModel.CreateShareGroups(assigned, shareModel).then(response => {
            shareModel.saveShareGroups(response).then(response => {
                res.status(200).json(response);
                console.log("Hello");
            }).catch(err => {
                res.status(500).json({
                    message: err.message
                });
            })
        }).catch(err => {
            res.status(500).json({
                message: err.message
            });
        });

    });






    app.use('/shareRequest', router);
}