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
    // 🚫 TODO: 1. Find the article by it's id
    // db.Article.findById(req.params.id, (err, foundArticle => { 
    // 🚫 TODO: 2. Pass the data to an ejs template (articlesShow.ejs)
    // 🚫 TODO: 3. res.render() that page
    res.send('STUB: Heres the individual article you requested')
})

// Edit route (GET) - display the form with the current data populating the fields
router.get('/:id/edit', (req, res) => {
    // 🚫 TODO: 1. Find the article specified by req.params.id
    db.findById(req.params.id, (err, foundArticle) => { 
        if(err) return console.log(err);
        
    // 🚫 TODO: 2. Pass the data to the edit page so you can display the current data 
    // 🚫 TODO: 3. Create a form that does a PUT to /articles/:id
    // 🚫 TODO: 4. res.render the edit page template
    res.send('STUB: Here is the form for editing that article')
})

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
    db.findByIdAndDelete(req.params.id);
    res.send('STUB: Article has been deleted')
})

module.exports = router;