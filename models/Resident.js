const mongoose = require('mongoose')

const residentSchema = new mongoose.Schema({
    residentName: {type: String, required: true, unique: true},
    profession: {type: String},
    gender: {type: String}
})

const Resident = mongoose.model('Resident', residentSchema)

module.exports = Resident 

