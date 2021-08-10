const mongoose = require('mongoose')

// Schema - define what a fruit should look like
const trackSchema = new mongoose.Schema({
    name: {type: String, required: true},
    artist: {type: String, required: true},
    genre: {type: String, required: true},
    date: Number
})


const Track = mongoose.model('Track', trackSchema)

module.exports = Track