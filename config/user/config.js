module.exports = {
    // Secret key for JWT signing and encryption
    'secret': 'trongtuyen96',
    'tokenExpiresIn': '7d',

    // Database connection 
    // MongoDB Atlas
    'database_mongo_cloud': 'mongodb+srv://admin:Admin123456@atwt-api-database-ueu4l.gcp.mongodb.net/test?retryWrites=true&w=majority',
    'database_mlab': 'mongodb://admin:Admin123456@ds363088.mlab.com:63088/atwt-api-database',
    
    // Setting port for server
    'port': process.env.PORT || 3000
};