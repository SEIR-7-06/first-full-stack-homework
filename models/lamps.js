const mongoose = require('mongoose')


//Setting up that there schema (idk what that means)
//instructions say thats what we want the Author to look like
const lampSchema = new mongoose.Schema({
    lampType: { type: String, required: true}
});

//Create Lamps model (why? idk)
const Lamp = mongoose.model('Lamp', lampSchema) 
//ohh maybe schema is used to put the input of whatever type of lamp
//we decide to input like onto the page or something

//Export the Lampie boys model
module.exports = Lamp;