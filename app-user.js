const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const config = require('./config/user/config');
const expressValidator = require('express-validator');


// Set up express app
const app = express();

// Body-parser json
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use(bodyParser({limit: '5mb'}))
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

// This line must be right after any of the bodyParser middleware
app.use(expressValidator());

// express serve static files
// app.use('/public/', express.static('./public'));

// Morgan to log any request to console
app.use(logger('dev'));

// Configuration
app.set('secret-jwt', config.secret);

// Log request middleware
app.use((req, res, next) => {
    console.log('Body: ', req.body);
    next();
});

// enable CORS from client-side
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Alow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-ALlow-Credentials, Content-Encoding");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
})

// Home page
app.get("/", (req, res) => {
    res.send("Automated Testing With Tuyen<br>API for testing: /v1/xxx");
})

// RESTful API handler
app.use('/', require('./routes/api'));

// Error handling middlware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({
        success: false,
        message: err.message
    })
})

// // Listen request from client on port 
app.listen(config.port, function () {
    console.log("Server user clients ready on port 3000");
})