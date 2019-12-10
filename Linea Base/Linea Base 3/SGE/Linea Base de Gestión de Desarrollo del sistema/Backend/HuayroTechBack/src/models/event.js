const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
//const timeZone = require('mongoose-timezone');

const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    district: { type: String, required: true },
    street: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    price: { type: mongoose.Decimal128, require: true },
    maxCapacity: { type: Number, required: true },
    creationDate: { type: Date, default: Date.now }
});

//userSchema.plugin(timeZone, { paths: ['creationDate'] });

module.exports = mongoose.model('Event', eventSchema);