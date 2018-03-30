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
        return this.produceModel.findById(details.produce_id).then(product => {
            if (product) {
                return this.getFarmerinfo(product.farmerId).then(info => {
                    var farmerinfo = {
                        id: info._id,
                        name: info.name,
                        mobile: info.mobile,
                        address: info.addr + "," + info.district + "," + info.state,
                        district: info.district
                    }

                    var productinfo = {
                        name: product.crop,
                        type: product.type,
                        quantity: details.quantity
                    }

                    var costInfo = {
                        transport: null,
                        crop: details.quantity * 10,
                        total: null
                    }

                    var transportInfo = {
                        destination: details.buyaddress,
                        origin: farmerinfo.address,
                        distance: null
                    }

                    return { farmerinfo, productinfo, costInfo, transportInfo };
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
        console.log(id)
        return user.findbyId(id).then(response => {
            return response;
        }).catch(err => {
            throw err;
        });
    }

    findById(id) {
        return this.produceModel.findById(id).then(produce => {
            return produce;
        }).catch(err => {
            return err;
        })
    }

    findAll() {
        return this.produceModel.find({}).then(produce => {
            return produce;
        }).catch(err => {
            throw err;
        })
    }


}

module.exports = produceModel;