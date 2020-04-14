const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Zoo = require('../../models/zoo')
const Animal = require('../../models/animal')

// Get zoo by ID
router.get("/:id", (req, res, next) => {
    let zooID = req.params.id;
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
    Animal.find({ zooID: zooID })
        .then((animals) => {
            return res.status(200).json(
                animals
            );
        }).catch(next);
});

module.exports = router;