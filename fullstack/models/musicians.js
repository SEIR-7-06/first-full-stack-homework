const mongoose = require('mongoose');

// Create the schema
// - defines what a Fruit will look like
const musicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: { type: Number},
  location:{ type: String},
  duration: { type: Number},

});

// Create the model
// - our interface for interacting with Fruit data
const Musicians = mongoose.model('Musicians', musicSchema);

// Make the Fruit model/schema available to other parts of my app
module.exports = Musicians;

