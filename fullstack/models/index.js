const mongoose = require('mongoose');

// Get the address to the Mongo database
const connectionString = 'mongodb://localhost:27017/musicdb';

// Fire off the connection to the Mongo database
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Listen for when we connect,
// and when connected call the callback function
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString} 🥭`);
});

// Export the musicians model from this file.
// This way the index.js file is our entry point for all of our data needs.
module.exports = {
  Musicians: require('./musicians.js'),
};
