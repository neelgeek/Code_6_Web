const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    password: String,
    aadhar: Number,
    mobile: Number,
    lang: String,
    addr1: String,
    taluka: String,
    district: String,
    state: String,
    pincode: Number,
    isFarmer: Boolean
});

module.exports = userSchema;