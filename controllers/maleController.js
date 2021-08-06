//need express in here b/c i need it to do ish with data
const express = require('express');
const router = express.Router();

//stimulating a mongodb database environment
const db = require('../models/index.js')

//Index Route --> needs ejs
router.get('/', (req, res) => {
    res.render('index.ejs')
})

//New Route --> needs ejs, form and sends form to create route 
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

//Show Route --> needs ejs
router.get('/:maleId', (req, res) => {
    res.render('show.ejs')
})

//Create Route
router.post('/', (req, res) => {
    console.log("you reached the create route")
    //we do this so it can show up in the data regardless of on or off status
    if (req.body.favorite === 'on') {
        req.body.favorite = true;
    } else {
        req.body.favorite = false;
    }
    db.Male.create(req.body, (err, createdMale) => {
        if (err) return console.log(err);
        console.log(createdMale) //checking myself
        res.redirect('/male')
    })
    console.log(req.body)
})

//Edit Route --> needs ejs, form and sends form to update route
router.get('/:maleId/edit', (req, res) => {
    res.render('update.ejs')
})
//Update Route --> 
router.put('/:maleId', (req,res) => {
    console.log(req.body);
})

//Delete Route
router.delete('/:maleId', (req, res) => {

})

module.exports = router;