// connects our server to mongoDB
const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost:27017/stackdb';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  
  
  mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
  });

  module.exports = {
      Cat: require('./Cat')
  }