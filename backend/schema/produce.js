const mongoose = require('mongoose');

const produceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    farmerid: mongoose.Schema.Types.ObjectId,
    crop: String,
    type: String,
    quantity: Number


});

module.exports = produceSchema;