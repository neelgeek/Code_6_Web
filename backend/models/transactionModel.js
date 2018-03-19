const mongoose = require('mongoose');
const orderScehma = require('../schema/orderSchema');
const transacSchema = require('../schema/transactionSchema');
const truckSchema = require('../schema/truckSchema');
const braintree = require('braintree');
const uniqid = require('uniqid');

class transaction {

    constructor() {
        this.orderModel = mongoose.model('order', orderScehma);
        this.transactionModel = mongoose.model('transaction', transacSchema);
        this.truckModel = mongoose.model('truck', truckSchema);
    }

    createOrder(details) {
        let otp = uniqid();
        details.merchant_otp = otp.substr(0, 5);
        details.farmer_otp = otp.substr(5, 5);

        let newOrder = new this.orderModel(details);


        return newOrder.save().then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }

    createTransaction(details) {
        let transaction = new this.transactionModel(details);
        return transaction.save().then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }


    updateOrder(details) {

        return this.orderModel.findByIdAndUpdate(details.id, { status: details.status })
            .then(response => {
                return response;
            }).catch(err => {
                throw err;
            })


    }

    findTruck(details) {
        let type = this.getType(details.weight);
        let currentLoc = details.location;
        return this.truckModel.find({ type, currentLoc }).then(response => {
            if (response !== null) {
                return response;
            } else {
                throw new Error('No trucks Found');
            }
        }).catch(err => {
            throw err;
        });
    }


    updateTruckStatus(details) {
        let id = details.id;
        let status = details.status;
        return this.truckModel.findByIdAndUpdate(id, { status }).then(response => {
                return response;
            })
            .catch(err => {
                throw err;
            })
    }

    getType(weight) {
        let type = null;
        if (weight < 1000) {
            type = "Small";
        } else if (weight < 5000 && weight > 1000) {
            type = "Medium";
        } else {
            type = "Large"
        }
        return type;
    }

}

module.exports = transaction;

//sd