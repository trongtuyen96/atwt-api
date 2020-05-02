const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Zoo = require('../../models/zoo')
const Animal = require('../../models/animal')

// Get zoo by ID
router.get("/:id", (req, res, next) => {
    let zooID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(zooID)) {
        return res.status(404).json({
            success: false,
            message: "Zoo not found"
        })
    }
    Zoo
        .findById(zooID)
        .then((zoo) => {
            if (!zoo) {
                return res.status(404).json({
                    success: false,
                    message: "Zoo not found"
                })
            }
            res.status(200).json(zoo);
        }).catch(next);
});

// Get all zoos
router.get("/", (req, res, next) => {
    Zoo.find({}).then((zoos) => {
        return res.status(200).json(
            zoos
        );
    }).catch(next);
});

// Get all animals of zoo
router.get("/:id/animals", (req, res, next) => {
    let zooID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(zooID)) {
        return res.status(404).json({
            success: false,
            message: "Zoo not found"
        })
    }
    Animal.find({ zooID: zooID })
        .then((animals) => {
            return res.status(200).json(
                animals
            );
        }).catch(next);
});

// Create a zoo
router.post("/", (req, res, next) => {
    let zoo = new Zoo({
        name: req.body.name,
        location: req.body.location,
        country: req.body.country,
        license: req.body.license,
        year: req.body.year
    });
    zoo.save().then((zoo) => {
        res.send(zoo)
    }).catch(next);
});

// Delete a zoo
/* router.delete("/:id", (req, res, next) => {
    let zooID = req.params.id;
    Zoo
        .findByIdAndRemove(zooID)
        .then(() => {
            return res.status(200).send({
                success: true
            });
        }).catch(next);
});
*/
module.exports = router;