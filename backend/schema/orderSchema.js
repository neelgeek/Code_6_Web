const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    merchant_id: mongoose.Schema.Types.ObjectId,
    farmer_id: { type: mongoose.Schema.Types.ObjectId, default: null },
    transport_id: { type: mongoose.Schema.Types.ObjectId, default: null },
    crop_details: Object,
    farmer_amount: Number,
    transport_amount: Number,
    status: { type: String, default: "Processing" },
    merchant_otp: String,
    farmer_otp: String
});

module.exports = orderSchema;