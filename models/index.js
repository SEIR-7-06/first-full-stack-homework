// Connect to our database
const mongoose = require('mongoose');


// Getting the address to the Mongo Database
const connectionString = 'mongodb://localhost:27017/nailsdb';

// Fireing off Connection to MongoDB & deactives those mongoose deprication warnings
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  // Listen for connection and call a call back function when we do connect //
  mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString} 🤍`);
  });

module.exports = {
    Nails: require('./nails.js')
}