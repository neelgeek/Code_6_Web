const mongoose = require('mongoose');
const shareReqSchema = require('../schema/sharingReqSchema');
const shareGroupScehma = require('../schema/shareGroupSchema');



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

    getOrders(date) {
        return this.SharingReqModel.find({ createdon: { $gte: date } }).then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }


    CreateShareGroups(assigned, model) {
        let shareGroups = [];
        return new Promise(function(resolve, reject) {
            Object.keys(assigned).forEach(truckid => {
                let truck_id = truckid;
                model.populateOrders(assigned[truckid]).then(orders => {
                    let newShareOrder = { truck_id, orders };
                    shareGroups.push(newShareOrder)
                });
            })
            resolve(shareGroups);
        });
    }

    populateOrders(shareorderids) {
        let orders = [];
        return new Promise(function(resolve, reject) {
            shareorderids.forEach(sorderid => {
                let shareOrder = {
                    shareReqid: sorderid,
                    orderid: null,
                    status: "Unpaid"
                }
                orders.push(shareOrder);
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
}

module.exports = SharingRequest;