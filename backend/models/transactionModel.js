const mongoose = require('mongoose');
const orderScehma = require('../schema/orderSchema');

class transaction {

    constructor() {
        this.orderModel = mongoose.model('order', orderScehma);
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