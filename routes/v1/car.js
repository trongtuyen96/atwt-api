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

// Create a car
router.post("/", (req, res, next) => {
    let car = new Car({
        type: req.body.type,
        speed: req.body.speed,
        model: req.body.model,
        color: req.body.color,
        userID: req.body.userID
    });
    car.save().then((car) => {
        res.send(car)
    }).catch(next);
});

// Delete a car
router.delete("/:id", (req, res, next) => {
    let carId = req.params.id;
    Car
        .findByIdAndRemove(carId)
        .then(() => {
            return res.status(200).send({
                success: true
            });
        }).catch(next);
});

module.exports = router;