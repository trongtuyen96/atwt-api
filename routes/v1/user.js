const express = require('express');
const User = require('../../models/user');
const Car = require('../../models/car');
const mongoose = require('mongoose');
const { query } = require('express');
const router = express.Router();

// // Require authenticate
// const authenticate = require('./auth-middleware');

// // Api for users
/*
router.get("/profile", authenticate, (req, res, next) => {
    let userID = req.decoded.userID;
    if (!userID) {
        return res.status(422).send({
            success: false,
            message: "Cannot access userID"
        });
    }

    User
        .findById(userID)
        .select('-password')
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User is not exist"
                });
            }

            return res.status(200).send({
                success: true,
                user: user
            });
        }).catch(next);
});

// Get all user
router.get("/", authenticate, (req, res, next) => {
    User.find({}).then((users) => {
        return res.status(200).json(
            users
        );
    }).catch(next);
});

// Get cars of user 
router.get("/car", authenticate, (req, res, next) => {
    let userID = req.decoded.userID;
    if (!userID) {
        return res.status(422).send({
            success: false,
            message: "Cannot access userID"
        });
    }

    Car
        .findOne({ userID: userID })
        .then((car) => {
            if (!car) {
                return res.status(404).json({
                    success: false,
                    message: "User doesn't have car"
                });
            }

            return res.status(200).send({
                success: true,
                car: car
            });
        }).catch(next);
});
*/

// Get user by ID
router.get("/:id", (req, res, next) => {
    let userID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userID)) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }
    User
        .findById(userID)
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                })
            }
            res.status(200).json(user);
        }).catch(next);
});

// // Get all users
// router.get("/", (req, res, next) => {
//     User.find({}).then((users) => {
//         return res.status(200).json(
//             users
//         );
//     }).catch(next);
// });

// Get users with conditions
router.get("/", (req, res, next) => {
    let condition = [];

    // Find name with regex
    let name = req.query.name;
    if (name) {
        condition.push({ name: { $regex: new RegExp(name), $options: "i" } });
    }

    // Find exact phone number
    let phoneNumber = req.query.phoneNumber;
    if (phoneNumber) {
        condition.push({
            phoneNumber: phoneNumber
        });
    }

    // Find birthDate greater than or equal given date
    let birthDate = req.query.birthDate;
    if (birthDate) {
        condition.push({
            "birthDate": { $gte: new Date(birthDate) }
        });
    }

    if (!condition) {
        User.find().and(condition).then((users) => {
            return res.status(200).json(
                users
            );
        }).catch(next);
    } else {
        User.find({}).then((users) => {
            return res.status(200).json(
                users
            );
        }).catch(next);
    }
});

// Get all cars of user
router.get("/:id/cars", (req, res, next) => {
    let userID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userID)) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }
    Car.find({ userID: userID })
        .then((cars) => {
            return res.status(200).json(
                cars
            );
        }).catch(next);
});

// Create new user
router.post("/", (req, res, next) => {
    if (!req.body.email
        || !req.body.password
        || !req.body.name
        || !req.body.birthDate
        || !req.body.phoneNumber) {
        return res.status(400).json({
            success: fail,
            message: "Missing required fields"
        });
    }
    let user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        birthDate: req.body.birthDate,
        phoneNumber: req.body.phoneNumber
    });
    user.save().then((user) => {
        res.send(user)
    }).catch(next);
});

// Update a user by id
router.put("/:id", (req, res, next) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty"
        });
    }
    let userID = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userID)) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }
    User
        .findByIdAndUpdate(userID, req.body, { new: true, useFindAndModify: false })
        .then(user => {
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: `Cannot update User with id = ${userID}`
                })
            } else {
                return res.status(201).json({
                    user
                })
            }
        }).catch(next);
})

// Delete a user
/* router.delete("/:id", (req, res, next) => {
    let userID = req.params.id;
    User
        .findByIdAndRemove(userID)
        .then(() => {
            return res.status(200).send({
                success: true
            });
        }).catch(next);
});
*/

module.exports = router;