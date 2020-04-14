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

// Create an animal
router.post("/", (req, res, next) => {
    let animal = new Animal({
        species: req.body.species,
        lifespan: req.body.lifespan,
        name: req.body.name,
        color: req.body.color,
        weight: req.body.weight,
        zooID: req.body.zooID
    });
    animal.save().then((animal) => {
        res.send(animal)
    }).catch(next);
});

// Delete an animal
router.delete("/:id", (req, res, next) => {
    let animalId = req.params.id;
    Animal
        .findByIdAndRemove(animalId)
        .then(() => {
            return res.status(200).send({
                success: true
            });
        }).catch(next);
});

module.exports = router;