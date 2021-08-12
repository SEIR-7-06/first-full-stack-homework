const mongoose = require('mongoose');

const robotSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true}, 
    price: {type: String, required: true},
    company: {type: String, required: true},
    launchDate: {type: String, required: true, unique: true}
})

const Robot = mongoose.model('Robots', robotSchema);

module.exports = Robot;