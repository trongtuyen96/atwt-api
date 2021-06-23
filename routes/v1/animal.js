const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Animal = require('../../models/animal')

// Get animal by ID
router.get("/:id", (req, res, next) => {
    let animalID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(animalID)) {
        return res.status(404).json({
            success: false,
            message: "Animal not found"
        })
    }
    Animal
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
    if (!req.body.species
        || !req.body.lifespan
        || !req.body.name
        || !req.body.color
        || !req.body.weight
        || !req.body.zooID) {
        return res.status(400).json({
            success: fail,
            message: "Missing required fields"
        });
    }
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

// Update an animal by id
router.put("/:id", (req, res, next) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty"
        });
    }
    let animalID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(animalID)) {
        return res.status(404).json({
            success: false,
            message: "Animal not found"
        })
    }
    Animal
        .findByIdAndUpdate(animalID, req.body, { useFindAndModify: false })
        .then(animal => {
            if (!animal) {
                return res.status(400).json({
                    success: false,
                    message: `Cannot update Animal with id = ${userID}`
                })
            } else {
                return res.status(201).json({
                    animal
                })
            }
        })
        .catch(next);
})

// Delete an animal
router.delete("/:id", (req, res, next) => {
    let animalID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(animalID)) {
        return res.status(404).json({
            success: false,
            message: "Animal not found"
        })
    }
    Animal
        .findByIdAndRemove(animalID)
        .then(() => {
            return res.status(200).send({
                success: true
            });
        }).catch(next);
});

module.exports = router;