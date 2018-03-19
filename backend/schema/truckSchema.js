const mongoose = require('mongoose');


const truckSchema = mongoose.Schema({
    comp_id: mongoose.Schema.Types.ObjectId,
    trucknum: { type: String, unique: true },
    password: String,
    type: String,
    activated: { type: Boolean, default: true },
    currentLoc: { type: String }
});


module.exports = truckSchema;