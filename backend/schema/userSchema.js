const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    aadhar: Number,
    mobile: Number,
    lang: String,
    addr1: String,
    taluka: String,
    district: String,
    state: String,
    pincode: Number
});

module.exports = userSchema;