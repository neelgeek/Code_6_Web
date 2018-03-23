const mongoose = require('mongoose');
const today = new Date();
today.setHours(0, 0, 0, 0);

const sharingReqSchema = mongoose.Schema({
    merchant_id: mongoose.Schema.Types.ObjectId,
    farmer_id: mongoose.Schema.Types.ObjectId,
    produce_id: mongoose.Schema.Types.ObjectId,
    origin: String,
    destination: String,
    weight: Number,
    distance: Number,
    amount: Number,
    createdon: { type: mongoose.Schema.Types.Date, default: today }
});

module.exports = sharingReqSchema;