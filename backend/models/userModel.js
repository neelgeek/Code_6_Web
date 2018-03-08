const mongoose = require('mongoose');
const userschema = require('../schema/UserSchema');
const objectId = mongoose.Types.ObjectId;

class UserModel {
    constructor() {
        this.farm_model = mongoose.model('farmer', userschema);
        this.buy_model = mongoose.model('merchant', userschema);
    }


    save_farmer(obj) {
        let user = new this.farm_model(obj);
        //console.log() //replace with object
        return user
            .save()
            .then(response => { return response; })
            .catch(err => err);
    }
    save_merchant(obj) {
        let user = new this.buy_model(obj);
        //console.log() //replace with object
        return user
            .save()
            .then(response => { return response; })
            .catch(err => err);
    }

    find_farmer(obj) {
        var mobile = obj.mobile;
        return this.farm_model.findOne({ number: mobile }).exec().then(user => {
            if (user) {
                // console.log(user);
                return user;
            }
        }).catch(err => {
            return err;
        });
    }

}

module.exports = UserModel;