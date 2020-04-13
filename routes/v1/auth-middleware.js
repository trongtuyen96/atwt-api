const config = require('../../../config/user/config');
const jwt = require('jsonwebtoken');

// Auth middleware
module.exports = (req, res, next) => {
    // check header or url parameters for post parameters for token
    let token = req.headers['x-access-token'];

    if(!token){
        return res.status(401).send({
            success: false,
            message: 'Chưa được xác thực'
        });
    }

    // Decode token
    jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            return res.json({
                success: false,
                message: 'Xác thực thất bại'
            });
        } else {
            // If everything is good, save to request for use in other routes
            req.decoded = decoded;
            next();
        }
    });
};
