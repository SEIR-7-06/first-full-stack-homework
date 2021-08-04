const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/robotdb';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionsString} `)
});

module.exports = {
    Robot: require('./Robot.js')
}



