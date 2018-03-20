const express = require('express');
const router = express.Router();

module.exports.controllerFunction = function(app) {

    router.post('/array', (req, res) => {
        let temp = req.body.arr;
        console.log((temp.length));
        var i = 0;
        temp.forEach(element => {
            i++;
            console.log(i);

        });
        res.send(temp);
    });


    app.use('/test', router);
}