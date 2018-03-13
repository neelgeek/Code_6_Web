const mongoose = require('mongoose');



const truckSchema = mongoose.Schema({
    companyName: { type: String },
    emailId: { type: String },
    password: { type: String },
    ownername: { type: String },
    phonenumber: { type: Number },
    city: { type: String }
});

module.exports = truckSchema;