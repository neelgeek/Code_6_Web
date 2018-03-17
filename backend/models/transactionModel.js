const mongoose = require('mongoose');
const orderScehma = require('../schema/orderSchema');
const braintree = require('braintree');

class transaction {

    constructor() {
        this.orderModel = mongoose.model('order', orderScehma);
        this.gateway = braintree.connect({
            environment: braintree.Environment.Sandbox,
            // Use your own credentials from the sandbox Control Panel here
            merchantId: 'ht7w76kny3r63525',
            publicKey: 's8qst7nsvxyt58kq',
            privateKey: '3b9942f09a0285c0ba64c0d958f49e33'
        });
    }

    createOrder(details) {
        let newOrder = new this.orderModel(details);
        return newOrder.save().then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }



}

module.exports = transaction;