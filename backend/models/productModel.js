const mongoose = require('mongoose');
const produceSchema = require('../schema/produce');
const userSchema = require('../schema/userSchema');
const userModel = require('./userModel');


class produceModel {

    constructor() {
        this.produceModel = mongoose.model('produce', produceSchema);
        this.userSchema = mongoose.model('user', userSchema);
    }

    viewProduct(details) {
        //  console.log(details);
        return this.produceModel.findById(details.produce_id).then(response => {
            if (response) {
                return this.getFarmerinfo(response.farmerId).then(info => {
                    var farmerinfo = {
                        name: info.name,
                        mobile: info.mobile,
                        address: info.addr1 + "," + info.taluka + "," + info.state + "," + info.pincode
                    }


                    return { farmerinfo };
                }).catch(err => {
                    throw err;
                });



            } else {
                throw new Error("No Product Found");
            }
        }).catch(err => {
            throw err
        });

    }

    getFarmerinfo(id) {

        const user = new userModel();
        return user.findbyId(id).then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }



}

module.exports = produceModel;