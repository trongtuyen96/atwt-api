const express = require('express');
const User = require('../../../models/user');
const router = express.Router();
const config = require('../../../config/user/config');
const jwt = require('jsonwebtoken');

// Auth with google
router.post("/google", (req, res) => {
    res.send('welcome auth with google');
});

// auth with email
router.post("/email", (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log("Email: " + email + "\r\nPassword: " + password);

    User.findOne({email: email}).then((user) => {
       if (!user) {
           return res.status(404).json({
               success: false,
               message: 'User is not exist'
           });
       }

       user.comparePassword(password, (err, isMatch) => {
           if (err) {
               return res.status(500).json({
                   success: false,
                   message: err
               });
           }

           if (!isMatch) {
               return res.status(401).json({
                   success: false,
                   message: 'Wrong password!'
               });
           }

           let token = jwt.sign({userID: user._id}, config.secret, { expiresIn: config.tokenExpiresIn });

           // return the information including token as JSON
           return res.status(200).json({
               success: true,
               message: 'Login sucessfully',
               token: token,
               user: user
           });
       });
    }).catch(next);
});

// Refresh token
router.post("/refresh_token", (req, res, next) => {
    let accessToken = req.body.accessToken;
    if (accessToken === null) {
        return res.status(422).json({
            success: false,
            message: 'accessToken missing'
        })
    }

    jwt.verify(accessToken, config.secret, (err, decoded) => {
        if (err) {
            if (err.name === "TokenExpiredError") {
                return res.status(401).json({
                    success: false,
                    message: 'Access period expired'
                });
            }

            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        // Check if user is exist!
        User.findById(decoded.userID).then((user) => {
            console.log(user);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User is not exist"
                });
            }

            // New access token
            let newToken = jwt.sign({userID: decoded.userID}, config.secret, { expiresIn: config.tokenExpiresIn });
            // Return the information including token as JSON
            return res.status(200).json({
                success: true,
                message: 'New access token refreshed',
                token: newToken
            });
        });
    });
});

module.exports = router;