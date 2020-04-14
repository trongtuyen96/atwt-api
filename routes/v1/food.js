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

module.exports = router;