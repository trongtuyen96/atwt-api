const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Factory = require('../../models/factory')
const Food = require('../../models/food')

// Get factory by ID
router.get("/:id", (req, res, next) => {
    let factoryID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(factoryID)) {
        return res.status(404).json({
            success: false,
            message: "Factory not found"
        })
    }
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

// // Get all factories
// router.get("/", (req, res, next) => {
//     Factory.find({}).then((factories) => {
//         return res.status(200).json(
//             factories
//         );
//     }).catch(next);
// });

// Get factories with conditions
router.get("/", (req, res, next) => {
    let condition = [];

    // Find name with regex
    let _name = req.query.name;
    if (_name) {
        condition.push({ name: { $regex: new RegExp(_name), $options: "i" } });
    }

    // Find country with regex
    let _country = req.query.country;
    if (_country) {
        condition.push({ country: { $regex: new RegExp(_country), $options: "i" } });
    }

    // Find exact license
    let _license = req.query.license;
    if (_license) {
        condition.push({
            license: _license
        });
    }

    // Find year greater than or equal given year
    let _year = req.query.year;
    if (_year) {
        condition.push({
            year: { $gte: _year }
        });
    }

    if (condition.length > 0) {
        Factory.find().and(condition).then((factories) => {
            return res.status(200).json(
                factories
            );
        }).catch(next);
    } else {
        Factory.find({}).then((factories) => {
            return res.status(200).json(
                factories
            );
        }).catch(next);
    }
});

// Get all foods of factory
router.get("/:id/foods", (req, res, next) => {
    let factoryID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(factoryID)) {
        return res.status(404).json({
            success: false,
            message: "Factory not found"
        })
    }
    Food.find({ factoryID: factoryID })
        .then((foods) => {
            return res.status(200).json(
                foods
            );
        }).catch(next);
});

// Create a factory
router.post("/", (req, res, next) => {
    if (!req.body.name
        || !req.body.location
        || !req.body.country
        || !req.body.license
        || !req.body.year) {
        return res.status(400).json({
            success: fail,
            message: "Missing required fields"
        });
    }
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

// Update a factory by id
router.put("/:id", (req, res, next) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty"
        });
    }
    let factoryID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(factoryID)) {
        return res.status(404).json({
            success: false,
            message: "Factory not found"
        })
    }
    Factory
        .findByIdAndUpdate(factoryID, req.body, { new: true, useFindAndModify: false })
        .then(factory => {
            if (!factory) {
                return res.status(400).json({
                    success: false,
                    message: `Cannot update Factory with id = ${userID}`
                })
            } else {
                return res.status(201).json({
                    factory
                })
            }
        })
        .catch(next);
})

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