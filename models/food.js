const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    name: String,
    weight: Number,
    color: String,
    origin: String,
    factoryID: {
        type: Schema.Types.ObjectId,
        required: true,
    }
})

const Food = mongoose.model('food', FoodSchema);

module.exports = Food;