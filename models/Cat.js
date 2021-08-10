const mongoose = require('mongoose')

// the schema
const catSchema = new mongoose.Schema({
    name: { type: String },
    breed: { type: String },
    age: { type: Number }
})

const Cat = mongoose.model('Cat', catSchema)

// the model
module.exports = Cat