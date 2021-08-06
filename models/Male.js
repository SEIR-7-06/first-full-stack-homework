//creates data models
//our schema and model go here
//schema a definition for the shape of your data

const mongoose = require('mongoose');

const maleSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true},
    show: { type: String, required: true },
    age: { type: String, required: true },
    favorite: Boolean,
    image: String
})

//model allows us to create documents for the
const Male = mongoose.model('Male', maleSchema);

//exporting it 
module.exports = Male;