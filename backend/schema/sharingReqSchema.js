const mongoose = require('mongoose');
const today = new Date();
today.setHours(0, 0, 0, 0);

const sharingReqSchema = mongoose.Schema({
    merchant_id: mongoose.Schema.Types.ObjectId,
    farmer_id: mongoose.Schema.Types.ObjectId,
    transport_id: mongoose.Schema.Types.ObjectId,
    crop_details: Object,
    farmer_amount: Number,
    transport_amount: Number,
    origin: String,
    distance: Number,
    destination: String,
    weight: Number,
    createdon: { type: mongoose.Schema.Types.Date, default: today }
});

module.exports = sharingReqSchema;