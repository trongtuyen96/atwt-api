const express = require('express');
const router = express.Router();

router.use('/v1', require('./api'));

module.exports = router;