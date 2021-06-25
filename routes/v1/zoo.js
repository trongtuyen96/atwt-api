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

// // Get all zoos
// router.get("/", (req, res, next) => {
//     Zoo.find({}).then((zoos) => {
//         return res.status(200).json(
//             zoos
//         );
//     }).catch(next);
// });

// Get zoos with conditions
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
        Zoo.find().and(condition).then((zoos) => {
            return res.status(200).json(
                zoos
            );
        }).catch(next);
    } else {
        Zoo.find({}).then((zoos) => {
            return res.status(200).json(
                zoos
            );
        }).catch(next);
    }
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

// Update a zoo by id
router.put("/:id", (req, res, next) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty"
        });
    }
    let zooID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(zooID)) {
        return res.status(404).json({
            success: false,
            message: "Zoo not found"
        })
    }
    Zoo
        .findByIdAndUpdate(zooID, req.body, { new: true, useFindAndModify: false })
        .then(zoo => {
            if (!zoo) {
                return res.status(400).json({
                    success: false,
                    message: `Cannot update Zoo with id = ${userID}`
                })
            } else {
                return res.status(201).json({
                    zoo
                })
            }
        })
        .catch(next);
})

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