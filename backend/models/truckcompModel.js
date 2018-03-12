const mongoose = require('mongoose');
const truckCompanySchema = require('../schema/truckcompScehma');


class truckCompany {
    constructor() {
        this.CompanyModel = mongoose.model('companie', truckCompanySchema);
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