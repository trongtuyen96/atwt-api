const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    type: String,
    speed: Number,
    model: String,
    color: String,
    userID: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

const Car = mongoose.model('car', CarSchema);

module.exports = Car;