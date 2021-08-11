const mongoose = require("mongoose");
const nameSchema = new mongoose.Schema({
    letters: {type: Number, required: true},
    firstName: {type: String, required: true},
    startsWithAConsonant: {type: Boolean, required: true}
});
    
