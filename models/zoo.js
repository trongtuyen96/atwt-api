const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ZooSchema = new Schema({
    name: String,
    location: String,
    country: String,
    license: String,
    year: Number
})

const Zoo = mongoose.model('zoo', ZooSchema);

module.exports = Zoo;