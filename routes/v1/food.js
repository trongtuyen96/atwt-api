const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Food = require('../../models/food')

// Get food by ID
router.get("/:id", (req, res, next) => {
    let foodID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(foodID)) {
        return res.status(404).json({
            success: false,
            message: "Food not found"
        })
    }
    Food
        .findById(foodID)
        .then((food) => {
            if (!food) {
                return res.status(404).json({
                    success: false,
                    message: "Food not found"
                })
            }
            res.status(200).json(food);
        }).catch(next);
});

// // Get all foods
// router.get("/", (req, res, next) => {
//     Food.find({}).then((foods) => {
//         return res.status(200).json(
//             foods
//         );
//     }).catch(next);
// });

// Get foods with conditions
router.get("/", (req, res, next) => {
    let condition = [];

    // Find name with regex
    let _name = req.query.name;
    if (_name) {
        condition.push({ name: { $regex: new RegExp(_name), $options: "i" } });
    }

    // Find color with regex
    let _color = req.query.color;
    if (_color) {
        condition.push({ color: { $regex: new RegExp(_color), $options: "i" } });
    }

    // Find origin with regex
    let _origin = req.query.origin;
    if (_origin) {
        condition.push({ origin: { $regex: new RegExp(_origin), $options: "i" } });
    }

    // Find weight greater than or equal given weight
    let _weight = req.query.weight;
    if (_weight) {
        condition.push({
            weight: { $gte: _weight }
        });
    }

    if (condition.length > 0) {
        Food.find().and(condition).then((foods) => {
            return res.status(200).json(
                foods
            );
        }).catch(next);
    } else {
        Food.find({}).then((foods) => {
            return res.status(200).json(
                foods
            );
        }).catch(next);
    }
});

// Create food
router.post("/", (req, res, next) => {
    if (!req.body.name
        || !req.body.weight
        || !req.body.color
        || !req.body.origin
        || !req.body.factoryID) {
        return res.status(400).json({
            success: fail,
            message: "Missing required fields"
        });
    }
    let food = new Food({
        name: req.body.name,
        weight: req.body.weight,
        color: req.body.color,
        origin: req.body.origin,
        factoryID: req.body.factoryID
    });
    food.save().then((food) => {
        res.send(food)
    }).catch(next);
});

// Update food by id
router.put("/:id", (req, res, next) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty"
        });
    }
    let foodID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(foodID)) {
        return res.status(404).json({
            success: false,
            message: "Food not found"
        })
    }
    Food
        .findByIdAndUpdate(foodID, req.body, { new: true, useFindAndModify: false })
        .then(food => {
            if (!food) {
                return res.status(400).json({
                    success: false,
                    message: `Cannot update Food with id = ${userID}`
                })
            } else {
                return res.status(201).json({
                    food
                })
            }
        })
        .catch(next);
})

// Delete food
router.delete("/:id", (req, res, next) => {
    let foodID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(foodID)) {
        return res.status(404).json({
            success: false,
            message: "Food not found"
        })
    }
    Food
        .findByIdAndRemove(foodID)
        .then(() => {
            return res.status(200).send({
                success: true
            });
        }).catch(next);
});

module.exports = router;