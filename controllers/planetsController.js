// Express Router
const express = require('express');
const db = require('../models/index.js');
const router = express.Router();


// Test Route
// router.get('/test/:firstName', (req, res) => {
//     console.log(req.params);
//     res.send('You hit the test route');
// }); // Worked


// Index Route
router.get('/', (req, res) => {
    db.Planet.find({}, (err, allPlanets) => {
        if (err) return console.log(err);
        console.log(`All Planets ${allPlanets}`);
        console.log(`Planets Index 0 ${allPlanets[0]}`);
        console.log(`Planets Name ${allPlanets[0].planetName}`);
        res.render('planets/planetsIndex.ejs', { allPlanets: allPlanets });
    });
});

// Planets New Route
router.get('/new', (req, res) => {
    res.render('planets/planetsNew.ejs');
});

// Create a route for handling a POST request to /planets
router.post('/', (req, res) => {
    console.log(req.body);
    db.Planet.create(req.body, (err, createdPlanet) => {
        if (err) return console.log(err);
        res.redirect('/planets');
    })
})

// Show route (GET)
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    db.Planet.findById(req.params.id, (err, foundPlanet) => {
        if(err) return console.log(err);
        res.render('planets/planetsShow.ejs', {onePlanet: foundPlanet });
    })
    res.send('STUB: Heres the individual article you requested')
})

// Edit route (GET) - display the form with the current data populating the fields
router.get('/:id/edit', (req, res) => {
    db.Planet.findById(req.params.id, (err, foundPlanet) => { 
        if(err) return console.log(err);
        res.render('planets/planetsEdit.ejs', {onePlanet: foundPlanet});
    });
    res.send(`STUB: Heres the edit form you requested`);
});

// Update route (PUT)
router.put('/:id', (req, res) => {
    db.Planet.findByIdAndUpdate(
        req.params.id,
        req.body,
        (err) => {
            if(err) return console.log(err)
            res.redirect('/planets')
        }
    )
    res.send('STUB: Article has been updated')
})

// Delete route (PUT)
router.put('/:id', (req, res) => {
    db.Planet.findByIdAndRemove(req.params.id, (err, foundPlanet => {
        if(err) return console.log(err);
        res.redirect('/planets');
    }));
    res.send('STUB: Article has been deleted')
})

module.exports = router;