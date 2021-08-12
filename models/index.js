const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/robotsdb';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`)
});

module.exports = {
    Robot: require('./Robot.js')
}



