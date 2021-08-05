// Set up connection to MongoDB

// Set up dependency
const mongoose = require('mongoose');

// Get the address to the Mongo database
const connectionString = 'mongodb://localhost:27018/planetsdb';

// Fire off the connection to the Mongo database
mongoose.connect(connectionString, {
    useNewUrlParse: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// Listen for when we connect. Call back the function once connected.
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

// Export the model from this file.
// This way the index.js file is our entry point for all of our data needs.
module.exports = {
    Planet: require('./Planet.js'),
};