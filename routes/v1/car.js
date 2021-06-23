const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Car = require('../../models/car')

// Get car by ID
router.get("/:id", (req, res, next) => {
    let carID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(carID)) {
        return res.status(404).json({
            success: false,
            message: "Car not found"
        })
    }
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
    if (!req.body.type
        || !req.body.speed
        || !req.body.model
        || !req.body.color
        || !req.body.userID) {
        return res.status(400).json({
            success: fail,
            message: "Missing required fields"
        });
    }
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

// Update a car by id
router.put("/:id", (req, res, next) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty"
        });
    }
    let carID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(carID)) {
        return res.status(404).json({
            success: false,
            message: "Car not found"
        })
    }
    Car
        .findByIdAndUpdate(carID, req.body, { useFindAndModify: false })
        .then(car => {
            if (!car) {
                return res.status(400).json({
                    success: false,
                    message: `Cannot update Car with id = ${carID}`
                })
            } else {
                return res.status(201).json({
                    car
                })
            }
        })
        .catch(next);
})

// Delete a car
router.delete("/:id", (req, res, next) => {
    let carID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(carID)) {
        return res.status(404).json({
            success: false,
            message: "Car not found"
        })
    }
    Car
        .findByIdAndRemove(carID)
        .then(() => {
            return res.status(200).send({
                success: true
            });
        }).catch(next);
});

module.exports = router;