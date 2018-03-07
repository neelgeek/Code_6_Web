const mongoose = require('mongoose');
const userschema = require('../Schema/UserSchema');
const objectId = mongoose.Types.ObjectId;

class UserModel {
    constructor() {
        this.model = mongoose.model('User', userschema);
    }
    save(obj) {
        let user = new this.model(obj);
        //console.log() //replace with object
        return user
            .save()
            .then(response => { return response; })
            .catch(err => err);
    }
    
}

module.exports = UserModel;