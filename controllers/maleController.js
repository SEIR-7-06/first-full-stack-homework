//need express in here b/c i need it to do ish with data
const express = require('express');
const router = express.Router();

//stimulating a mongodb database environment
const db = require('../models/index.js')

//Index Route --> DONE //needs ejs
router.get('/', (req, res) => {
    db.Male.find({}, (err, allMales) => {
        if (err) return console.log(err);
        res.render('index.ejs', {
            allMales: allMales
        })
    })
})

//New Route -->  DONE //needs ejs, form and sends form to create route 
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

//Show Route --> DONE //needs ejs
router.get('/:maleId', (req, res) => {
    db.Male.findById(req.params.maleId, (err, singleMale) => {
        if (err) return console.log(err);
        res.render('show.ejs', {
            singleMale: singleMale
        })
    })
})

//Create Route --> DONE
router.post('/', (req, res) => {
    // console.log("you reached the create route")
    //we do this so it can show up in the data regardless of on or off status
    if (req.body.favorite === 'on') {
        req.body.favorite = true;
    } else {
        req.body.favorite = false;
    }
    db.Male.create(req.body, (err, createdMale) => {
        if (err) return console.log(err);
        // console.log(createdMale) //checking myself
        res.redirect('/male')
    })
})

//Edit Route --> DONE  //needs ejs, form and sends form to update route
router.get('/:maleId/edit', (req, res) => {
    maleId = req.params.maleId
    db.Male.findById(maleId, (err, foundMale) => {
        if (err) return console.log(err)
        res.render('update.ejs', {
            oneMale: foundMale
        })
    })
})

//Update Route --> DONE //updates the db data
router.put('/:maleId', (req,res) => {
    if (req.body.favorite === 'on') {
        req.body.favorite = true;
    } else {
        req.body.favorite = false;
    }
    db.Male.findByIdAndUpdate(req.params.maleId, req.body, (err, updatedCharacter) => {
        if (err) return console.log(err)
        res.redirect(`/male/${req.params.maleId}`)
    })
})

//Delete Route --> DONE
router.delete('/:maleId', (req, res) => {
    const maleId = req.params.maleId;
    db.Male.findByIdAndDelete(maleId, (err) => {
        if (err) return console.log(err)
        res.redirect('/males');
    })
})

module.exports = router;