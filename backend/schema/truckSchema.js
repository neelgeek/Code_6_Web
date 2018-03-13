const mongoose = require('mongoose');


const truckSchema = mongoose.Schema({
    comp_id: mongoose.Schema.Types.ObjectId,
    trucknum: String,
    password: String,
    type: String,
    activated: { type: Boolean, default: true }
});


module.exports = truckSchema;