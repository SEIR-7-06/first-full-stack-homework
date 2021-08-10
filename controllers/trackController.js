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

// CREATE////////
router.post('/', (req,res) => {
    db.Track.create(req.body, (err, createdTrack)=> {
        if (err) return console.log(err)
        res.redirect('/tracks')
    }) 
    console.log(req.body);
 })

module.exports = router