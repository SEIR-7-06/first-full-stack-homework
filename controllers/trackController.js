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


// SHOW //////////
router.get('/:trackId', (req,res) => {
     db.Track.findById(req.params.trackId, (err, showTrack) => {
         if (err) return console.log(err)
         res.render('show.ejs', { oneTrack: showTrack})
     })
 })

 //EDIT/////////////
router.get('/:trackId/edit', (req,res) => {
    db.Track.findById(req.params.trackId, (err, showTrack) => {
        if (err) return console.log(err)
        res.render('edit.ejs', { oneTrack: showTrack})
    })
 })


 //UPDATE /////////
router.put('/:trackId', (req,res) => {
    
    console.log(req.body);

    db.Track.findByIdAndUpdate(req.params.trackId, req.body, (err, updatedTrack) => {
        if (err) return console.log(err)
        res.redirect('/tracks/' + req.params.trackId)
    })
})

// DELETE /////////
router.delete('/:trackId', (req,res) => {
    const trackId = req.params.trackId

    db.Track.findByIdAndDelete(trackId, (err) => {
        if (err) return console.log(err);

        res.redirect('/tracks')
    })
})


module.exports = router