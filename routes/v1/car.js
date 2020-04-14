const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Car = require('../../models/car')

// Get car by ID
router.get("/:id", (req, res, next) => {
    let carID = req.params.id;
    Car
        .findById(carID)
        .then((car) => {
            if (!car) {
                return res.status(404).json({
                    success: false,
                    message: "Car not found"
                })
            }
            res.status(200).json(car);
        }).catch(next);
});

// Get all cars
router.get("/", (req, res, next) => {
    Car.find({}).then((cars) => {
        return res.status(200).json(
            cars
        );
    }).catch(next);
});

module.exports = router;