/* Require Modules */
const mongoose = require("mongoose")

/* Define Schema */
const capySchema = new mongoose.Schema({
    name: {type:String},
    age: {type:Number}
})

/* Create Model  */
const Capy = mongoose.model('Capy', capySchema)

/* Export Model */
module.exports = Capy