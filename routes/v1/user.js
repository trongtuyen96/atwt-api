const express = require('express');
const User = require('../../models/user');
const Car = require('../../models/car');
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
    Car
        .findById(userID)
        .then((user) => {
            if (!car) {
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                })
            }
            res.status(200).json(user);
        }).catch(next);
});

// Get all users
router.get("/", (req, res, next) => {
    User.find({}).then((users) => {
        return res.status(200).json(
            users
        );
    }).catch(next);
});

// Get all cars of user
router.get("/:id/cars", (req, res, next) => {
    let userID = req.params.id;
    Car.find({ userID: userID })
        .then((cars) => {
            return res.status(200).json(
                cars
            );
        }).catch(next);
});

// Create new user
router.post("/", (req, res, next) => {
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