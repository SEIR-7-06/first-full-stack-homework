// Express Router
const express = require('express');
const { Planet } = require('../models/index.js');
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
        // console.log(`All Planets ${allPlanets}`);
        // console.log(`Planets Index 0 ${allPlanets[0]}`);
        // console.log(`Planets Name ${allPlanets[0].planetName}`);
        res.render('planets/planetsIndex.ejs', { allPlanets: allPlanets });
    });
});

// Planets New Route
router.get('/new', (req, res) => {
    res.render('planets/planetsNew.ejs');
});

// Create a route for handling a POST request to /planets
router.post('/', (req, res) => {
    // console.log(req.body);
    if(req.body.official === 'on') {
        req.body.official = true;
    } else {
        req.body.official = false;
    };
    db.Planet.create(req.body, (err, createdPlanet) => {
        if (err) return console.log(err);
        res.redirect('/planets');
    })
})

// Show route (GET)
router.get('/:planetId', (req, res) => {
    console.log('req.params.planetId in Show Route is: ' + req.params.planetId);
    db.Planet.findById( req.params.planetId, (err, foundPlanet) => {
        if(err) { res.send(err) };         // instead of console.log because that was hanging
        res.render('planets/planetsShow.ejs', { 
            onePlanet: foundPlanet });
    })
    // res.send('STUB: Heres the individual article you requested')
})

// Edit route (GET) - display the form with the current data populating the fields
router.get('/:planetId/edit', (req, res) => {
    db.Planet.findById(req.params.planetId, (err, foundPlanet) => { 
        if(err) return console.log(err);
        res.render('planets/planetsEdit.ejs', {onePlanet: foundPlanet});
    });
    // res.send(`STUB: Heres the edit form you requested`);
});

// Update route (PUT)
router.put('/:planetId', (req, res) => {
    // console.log(req.params.planetId);
    if(req.body.official === 'on') {
        req.body.official = true;
    } else {
        req.body.official = false;
    };
    db.Planet.findByIdAndUpdate(req.params.planetId, req.body,
        (err, foundPlanet) => {
            if(err) { res.send(err) };
            res.redirect(`/planets/${req.params.planetId}`)
        },
    )
    // res.redirect('/planets/:planetId');
    // res.send('STUB: Article has been updated')
});

// Delete route (DELETE)
router.delete('/:planetId', async (req, res) => {
    // const planetIdNew = mongoose.Types.ObjectId(req.params.planetId);
    // console.log(`planetIdNew is: ${planetIdNew}`);
    // console.log(`req.params.planetId is: ${req.params.planetId}`);
    // db.Planet.findByIdAndDelete(req.params.planetId, (err, foundPlanet => {
    //     if(err) { res.send(err) };
    //     res.redirect('/planets');
    // }));
    // res.send('STUB: Article has been deleted')
    await db.Planet.findByIdAndDelete(req.params.planetId);
    res.redirect('/planets');
})

module.exports = router;