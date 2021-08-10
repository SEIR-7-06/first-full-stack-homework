const express = require('express');
const router = express.Router();

// Mongoose DATABASE ////////
const db = require('../models/index')


///// INDEX ROUTE /////////////
router.get('/', (req, res) => {
    db.Track.find({}, (err, allTracks) => {
        if (err) return console.log(err)
        res.render('index.ejs', {allTracks: allTracks})
    })
    // res.send('index controller')
})




module.exports = router