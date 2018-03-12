const mongoose = require('mongoose');
const userschema = require('../schema/userSchema');
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


    findOne(obj) {
        // console.log(obj);    
        const { isFarmer, mobile } = obj;
        return this.usermodel.findOne({ $and: [{ mobile }, { isFarmer }] }).then(user => {
            if (user) {
                return user;
            } 

            if(user == null) {
                throw new Error("no such user found with " + mobile +" register the user first")
            }
        }).catch(err => {
            throw err;
        });
    }
    findOneAndDelete(user) {
        return this.usermodel
            .deleteOne({ _id: objectId(user._id) })
            .then(deletedUser => {

                return deletedUser
            })
            .catch(err => {
                throw err;
            })
    }
    findOneAndEdit(user,updatedData){
        return this.userModel
                .findOneAndUpdate({_id:objectId(user._id)},{updatedData})
                .then(updatedData =>{
                    return updatedData
                })
                .catch(err=>{
                    throw err;
                })
    }

}

module.exports = UserModel;