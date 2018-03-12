const mongoose = require('mongoose');
const truckCompanySchema = require('../schema/truckcompScehma');


class truckCompany {
    constructor() {
        this.CompanyModel = mongoose.model('company', truckCompanySchema);
    }

    save(details) {
        let newCompany = new this.CompanyModel(details);
        return newCompany.save().then(response => {
            return response;
        }).catch(err => {
            throw err;
        });

    }

    findOne(email) {
        return this.CompanyModel.findOne({ emailid: email })
            .then(response => {
                if (response) {
                    return response;
                } else {
                    throw new Error("No User Found");
                }
            })
            .catch(err => {
                throw err;
            });
    }
}




module.exports = truckCompany;