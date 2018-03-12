const mongoose = require('mongoose');

const produceSchema = mongoose.Schema({
    farmerId: { type: mongoose.Schema.Types.ObjectId },
    crop: { type: String },
    type: { type: String },
    quantity: { type: Number }
});

module.exports = produceSchema;