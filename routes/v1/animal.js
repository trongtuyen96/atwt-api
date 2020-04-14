const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Animal = require('../../models/animal')

// Get animal by ID
router.get("/:id", (req, res, next) => {
    let animalID = req.params.id;
    Car
        .findById(animalID)
        .then((animal) => {
            if (!animal) {
                return res.status(404).json({
                    success: false,
                    message: "Animal not found"
                })
            }
            res.status(200).json(animal);
        }).catch(next);
});

// Get all animals
router.get("/", (req, res, next) => {
    Animal.find({}).then((animals) => {
        return res.status(200).json(
            animals
        );
    }).catch(next);
});

module.exports = router;