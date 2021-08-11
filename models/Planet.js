// Set up dependency
const mongoose = require('mongoose');

// Schema
const planetSchema = new mongoose.Schema({
    planetName: { type: String, required: true },
    official: { type: Boolean, required: true },
    planetType: { type: String, required: true },
    lengthOfDay: Number,
})

const Planet = mongoose.model('Planet', planetSchema);

// Export data
module.exports = Planet;

// Data for the planets for later

// const planets = [
    // {
    //     planetName: 'Mercury',
    //     official: true,
    //     planetType: 'terrestrial planet',
    //     lengthOfDay: 4222.6,
    // },
    // {
    //     planetName: 'Venus',
    //     official: true,
    //     planetType: 'terrestrial planet',
    //     lengthOfDay: 2802.0
    // },
    // {
    //     planetName: 'Earth',
    //     official: true,
    //     planetType: 'terrestrial planet',
    //     lengthOfDay: 24.0,
    // },
    // {
    //     planetName: 'Mars',
    //     official: true,
    //     planetType: 'terrestrial planet',
    //     lengthOfDay: 708.7,
    // },
    // {
    //     planetName: 'Jupiter',
    //     official: true,
    //     planetType: 'gas giant',
    //     lengthOfDay: 9.9,
    // },
    // {
    //     planetName: 'Saturn',
    //     official: true,
    //     planetType: 'gas giant',
    //     lengthOfDay: 10.7,
    // },
    // {
    //     planetName: 'Uranus',
    //     official: true,
    //     planetType: 'gas giant',
    //     lengthOfDay: 17.2,
    // },
    // {
    //     planetName: 'Neptune',
    //     official: true,
    //     planetType: 'gas giant',
    //     lengthOfDay: 16.1,
    // },
    // {
    //     planetName: 'Pluto',
    //     official: false,
    //     planetType: 'dwarf planet',
    //     lengthOfDay: 153.3,
    // }
// ];

// module.exports = planets;