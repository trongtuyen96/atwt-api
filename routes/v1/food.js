const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Food = require('../../models/food')

// Get food by ID
router.get("/:id", (req, res, next) => {
    let foodID = req.params.id;
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

// Get all foods
router.get("/", (req, res, next) => {
    Food.find({}).then((foods) => {
        return res.status(200).json(
            foods
        );
    }).catch(next);
});

// Create food
router.post("/", (req, res, next) => {
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

// Delete food
router.delete("/:id", (req, res, next) => {
    let foodID = req.params.id;
    Food
        .findByIdAndRemove(foodID)
        .then(() => {
            return res.status(200).send({
                success: true
            });
        }).catch(next);
});

module.exports = router;