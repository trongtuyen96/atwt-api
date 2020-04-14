module.exports = {
    // Secret key for JWT signing and encryption
    'secret': 'trongtuyen96',
    'tokenExpiresIn': '7d',

    // Database connection 
    'database': '',
    'database_mongo_cloud': 'mongodb+srv://admin:admin123456@atwt-api-database-ueu4l.gcp.mongodb.net/test?retryWrites=true&w=majority',
    
    // Setting port for server
    'port': process.env.PORT || 3000
};