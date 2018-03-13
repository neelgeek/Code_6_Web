const mongoose = require('mongoose');
const truckCompanySchema = require('../schema/truckcompScehma');
const truckScehma = require('../schema/truckSchema');


class truckCompany {
    constructor() {
        this.CompanyModel = mongoose.model('companie', truckCompanySchema);
        this.TruckModel = mongoose.model('truck', truckScehma);
    }

    save(details) {
        let newCompany = new this.CompanyModel(details);
        return newCompany.save().then(response => {
            return response;
        }).catch(err => {
            return err;
        });

    }

    findOne(email) {
        return this.CompanyModel.findOne({ emailid: email })
            .then(response => {
                if (response) {
                    console.log(response);
                    return response;
                } else {
                    throw new Error("No User Found");
                }
            })
            .catch(err => {
                throw err;
            });
    }


    getTrucks() {
        return this.TruckModel.aggregate([{ $match: { activated: true } }, { $group: { _id: '$type', trucksid: { $push: '$_id' } } }]).then(response => {
            return response;
        }).catch(err => {
            throw err;
        })
    }

}




module.exports = truckCompany;