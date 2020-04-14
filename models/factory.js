const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FactorySchema = new Schema({
    name: String,
    location: String,
    country: String,
    license: String,
    year: Number
})

const Factory = mongoose.model('factory', FactorySchema);

module.exports = Factory;