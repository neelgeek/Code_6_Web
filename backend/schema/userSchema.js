const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String },
    password: { type: String },
    aadhar: { type: Number },
    mobile: { type: Number },
    lang: { type: String },
    addr1: { type: String },
    taluka: { type: String },
    district: { type: String },
    state: { type: String },
    pincode: { type: Number },
    isFarmer: { type: Boolean }
});

module.exports = userSchema;