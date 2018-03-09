const mongoose = require('mongoose');
const userschema = require('../schema/UserSchema');
const objectId = mongoose.Types.ObjectId;

class UserModel {
    constructor() {
        this.usermodel = mongoose.model('user', userschema);
    }


    save(obj) {
        let user = new this.usermodel(obj);
        //console.log() //replace with object
        return user
            .save()
            .then(response => { return response; })
            .catch(err => err);
    }


    find(obj) {
        var mobile = obj.mobile;
        var isfarm = obj.isfarmer;

        return this.usermodel.findOne({ $and: [{ number: mobile }, { isFarmer: isfarm }] }).then(user => {
            if (user) {
                return user;
            }
        }).catch(err => {
            return err;
        });
    }

}

module.exports = UserModel;