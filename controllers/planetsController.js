// Set up dependencies
const express = require('express');
const router = express.Router();

// Connect the database
const db = require('../models/index.js');

// Test Route
router.get('/test/:firstName', (req, res) => {
    console.log(req.params);
    res.send('You hit the test route');
}); // Worked

// Index Route
router.get('/', (req, res) => {
    db.Planet.find({}, (err, allPlanets) => {
        if (err) return console.log(err);
        res.render('index.ejs', { allPlanets: allPlanets });
    });
});



module.exports = router;