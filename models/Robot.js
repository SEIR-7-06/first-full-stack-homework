const mongoose = require('mongoose');

const robotSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true}, 
    price: {type: Number, required: true},
    company: {type: String, required: true, unique: true},
    launchDate: {type: Date, required: true, unique: true}
})

const Robot = mongoose.model('Robot', robotSchema);

module.exports = Robot;