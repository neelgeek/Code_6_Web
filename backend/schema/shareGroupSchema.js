const mongoose = require('mongoose');

const schema = mongoose.Schema({
    truck_id: String,
    orders: { type: Array, default: [] },
    createdOn: { type: mongoose.Schema.Types.Date, default: new Date() }
});

module.exports = schema;