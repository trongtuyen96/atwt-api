const express = require('express');
const User = require('../../models/user');
const Car = require('../../models/car');
const router = express.Router();

// Require authenticate
const authenticate = require('./auth-middleware');

// Api for users
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

module.exports = router;