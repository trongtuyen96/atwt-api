const express = require('express');
const app = express.Router();
const bodyParser = require('body-parser');


// Open for authentication
// app.use('/register', require('./register'));
// app.use('/auth', require('./auth'));

// Authenication before access other APIs
// app.use(require('./auth-middleware'));

// Below APIs need an authentication
app.use('/user', require('./user'));
app.use('/car', require('./car'));
app.use('/fruit', require('./fruit'));
app.use('/animal', require('./animal'));
app.use('/food', require('./food'));

module.exports = app;