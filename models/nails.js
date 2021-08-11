const mongoose = require('mongoose');

const nailSchema = new mongoose.Schema({
    service: { type: String, required: true },
    color: { type: String },
    shape: { type: String },
    date: { type: String },
    time: { type: String }
})

const Nails = mongoose.model('Nails', nailSchema);

module.exports = Nails;