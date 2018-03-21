const mongoose = require('mongoose');
const shareReqSchema = require('../schema/sharingReqSchema');


class SharingRequest {
    constructor() {
        this.SharingReqModel = mongoose.model('shareRequest', shareReqSchema);
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
}

module.exports = SharingRequest;