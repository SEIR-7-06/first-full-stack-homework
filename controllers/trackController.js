const express = require('express');
const router = express.Router();

// Mongoose DATABASE ////////
const db = require('../models/index')

/// base route '/tracks' //

///// INDEX ROUTE /////////////
router.get('/', (req, res) => {
    db.Track.find({}, (err, allTracks) => {
        if (err) return console.log(err)
        res.render('index.ejs', {allTracks: allTracks})
    })
})

// NEW /////////////// 
router.get('/new', (req,res) => {
    res.render('new.ejs') 
 })



module.exports = router