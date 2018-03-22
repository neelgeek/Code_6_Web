const mongoose = require('mongoose');

const schema = mongoose.Schema({
    truck_id: mongoose.Schema.Types.ObjectId,
    orders: { type: Array, default: [] },
    createdOn: { type: mongoose.Schema.Types.Date, default: new Date() }
});

module.exports = schema;