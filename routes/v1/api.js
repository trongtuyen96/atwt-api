const express = require('express');
const app = express.Router();
const bodyParser = require('body-parser');


app.use('/register', require('./register'));
app.use('/auth', require('./auth'));

// Authenication before access other APIs
// app.use(require('./auth-middleware'));

// Below APIs need an authentication
app.use('/user', require('./user'));

app.use('/car', require('./car'));
app.use('/fruit', require('./fruit'));
app.use('/food', require('./food'));
app.use('/animal', require('./animal'));

module.exports = app;