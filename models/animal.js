const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    species: String,
    lifespan: Number,
    name: String,
    color: String,
    weight: Number,
    zooID: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

const Animal = mongoose.model('animal', AnimalSchema);

module.exports = Animal;