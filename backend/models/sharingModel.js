const mongoose = require('mongoose');
const shareReqSchema = require('../schema/sharingReqSchema');
const shareGroupScehma = require('../schema/shareGroupSchema');
const truckmodel = require('../models/truckModel');



class SharingRequest {
    constructor() {
        this.SharingReqModel = mongoose.model('shareRequest', shareReqSchema);
        this.ShareGroupModel = mongoose.model('shareGroup', shareGroupScehma);
    }

    createShareReq(details) {
        let newRequest = new this.SharingReqModel(details);
        return newRequest.save().then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }

    getRequest(date) {
        return this.SharingReqModel.find({ createdon: { $gte: date } }).then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }

    getRequestById(id) {
        return this.SharingReqModel.findById(id).then(response => {
            return response;
        }).catch(err => {
            throw err
        });
    }

    CreateShareGroups(assigned, model) {
        let shareGroups = [];
        let truck = new truckmodel();
        return new Promise(function(resolve, reject) {
            Object.keys(assigned).forEach(truckid => {
                let truck_id = truckid;
                truck.getTruckRate(truck_id).then(rate => {
                    model.populateOrders(assigned[truckid], rate, model).then(orders => {
                        let newShareOrder = { truck_id, orders };
                        shareGroups.push(newShareOrder)
                    });
                }).catch(err => {
                    throw err;
                })

            })
            setTimeout(function() {
                resolve(shareGroups);
            }, 5000);


        });
    }

    populateOrders(shareorderids, rate, model) {
        let orders = [];

        return new Promise(function(resolve, reject) {
            shareorderids.forEach(sreqid => {
                let transport_costs = [];
                model.getRequestById(sreqid).then(shareReq => {
                        let shareOrder = {
                            shareReqid: sreqid,
                            orderid: null,
                            status: "Unpaid",
                            crop_amount: shareReq.amount,
                        }
                        orders.push(shareOrder);
                        transport_costs.push(shareReq.distance * rate);

                        let maxCost = transport_costs.sort((a, b) => { return a - b; })[0];
                        let divided_cost = maxCost / shareorderids.length;
                        orders.forEach(order => {
                            order.transport_amount = divided_cost;
                            order.total = divided_cost + order.crop_amount;
                        });
                    }).catch(err => {
                        throw err;
                    })
                    // console.log(transport_costs);

            });
            if (orders) {
                resolve(orders);
            } else {
                reject(Error("Orders Empty"));
            }
        });
    }

    saveShareGroups(groups) {

        return this.ShareGroupModel.insertMany(groups).then(response => {
            return response;
        }).catch(err => {
            throw err;
        })
    }

    createOrder(sharereqid) {

    }

}

module.exports = SharingRequest;