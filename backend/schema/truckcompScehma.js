const mongoose = require('mongoose');



const truckSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cname: String,
    emailid: String,
    password: String,
    ownername: String,
    phnumber: Number,
    city: String
});

module.exports = truckSchema;