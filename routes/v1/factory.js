const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Factory = require('../../models/factory')
const Food = require('../../models/food')

// Get factory by ID
router.get("/:id", (req, res, next) => {
    let factoryID = req.params.id;
    Factory
        .findById(factoryID)
        .then((factory) => {
            if (!factory) {
                return res.status(404).json({
                    success: false,
                    message: "Factory not found"
                })
            }
            res.status(200).json(factory);
        }).catch(next);
});

// Get all factories
router.get("/", (req, res, next) => {
    Factory.find({}).then((factories) => {
        return res.status(200).json(
            factories
        );
    }).catch(next);
});

// Get all foods of factory
router.get("/:id/foods", (req, res, next) => {
    let factoryID = req.params.id;
    Food.find({ factoryID: factoryID })
        .then((foods) => {
            return res.status(200).json(
                foods
            );
        }).catch(next);
});

// Create a factory
router.post("/", (req, res, next) => {
    let factory = new Factory({
        name: req.body.name,
        location: req.body.location,
        country: req.body.country,
        license: req.body.license,
        year: req.body.year
    });
    factory.save().then((factory) => {
        res.send(factory)
    }).catch(next);
});

// Delete a factory
/* router.delete("/:id", (req, res, next) => {
    let factoryID = req.params.id;
    Factory
        .findByIdAndRemove(factoryID)
        .then(() => {
            return res.status(200).send({
                success: true
            });
        }).catch(next);
});
*/

module.exports = router;