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

// // Get all animals
// router.get("/", (req, res, next) => {
//     Animal.find({}).then((animals) => {
//         return res.status(200).json(
//             animals
//         );
//     }).catch(next);
// });

// Get animals with conditions
router.get("/", (req, res, next) => {
    let condition = [];

    // Find name with regex
    let _name = req.query.name;
    if (_name) {
        condition.push({ name: { $regex: new RegExp(_name), $options: "i" } });
    }

    // Find species with regex
    let _species = req.query.species;
    if (_species) {
        condition.push({ species: { $regex: new RegExp(_species), $options: "i" } });
    }

    // Find color with regex
    let _color = req.query.color;
    if (_color) {
        condition.push({ color: { $regex: new RegExp(_color), $options: "i" } });
    }

    // Find weight greater than or equal given weight
    let _weight = req.query.weight;
    if (_weight) {
        condition.push({
            weight: { $gte: _weight }
        });
    }

    // Find lifespan greater than or equal given lifespan
    let _lifespan = req.query.lifespan;
    if (_lifespan) {
        condition.push({
            lifespan: { $gte: _lifespan }
        });
    }

    if (condition.length > 0) {
        Animal.find().and(condition).then((animals) => {
            return res.status(200).json(
                animals
            );
        }).catch(next);
    } else {
        Animal.find({}).then((animals) => {
            return res.status(200).json(
                animals
            );
        }).catch(next);
    }
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
        .findByIdAndUpdate(animalID, req.body, { new: true, useFindAndModify: false })
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