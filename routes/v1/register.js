const express = require('express');
const User = require('../../../models/user');
const router = express.Router();

// register with google
router.post("/google", (req, res, next) => {
    res.send('register with google');
});

// register with email
router.post("/email", (req, res, next) => {
    req.checkBody({
        'email': {
            notEmpty: true,
            isEmail: {
                errorMessage: 'Not an valid email'
            },
            errorMessage: 'Email cannot be blank'
        },
        'password': {
            notEmpty: true,
            isLength: {
                options: [{ min: 6}],
                errorMessage: 'Password must have minimum of 6 characters'
            },
            errorMessage: 'Password cannot be blank'
        },
        'name': {
            notEmpty: true,
            errorMessage: 'Name cannot be blank' // Error message for the parameter
        },
        'birthDate': {
            notEmpty: true,
            isDate: {
                errorMessage: 'Not an valid date'
            },
            errorMessage: 'Birth date cannot be blank'
        },
        'phoneNumber': {
            notEmpty: true,
            errorMessage: 'Telephone cannot be blank'
        }
    });

    let errors = req.validationErrors();
    if (errors) {
        return res.status(422).send(errors);
    }

    let user = new User({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        birthDate: req.body.birthDate,
        phoneNumber: req.body.phoneNumber,
    });

    user.save().then((user) => {
        res.send(user)
    }).catch(next);
});

module.exports = router;