const express = require('express');
const router = express.Router();
//const nails = require('../models/NailsModel.js')
const db = require('../models/index.js');



// Index Route //
router.get('/', (req, res) => {
    db.Nails.find({}, (err, allNails) => {
        if (err) return console.log(err);
        
        
        res.render('index.ejs', {
            allNails: allNails
    });
    })
})

// New Route // 
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Show Route // 
router.get('/:nailId', (req, res) => {
    db.Nails.findById(req.params.nailId, (err, foundNail) => {
        if (err) return console.log(err);
        
        
        res.render('show.ejs', { oneNail: foundNail })
    })
})

// Create Route //
router.post('/', (req, res) => {
    //console.log(req.body)
    db.Nails.create(req.body, (err, createdNails) => {
        if (err) return console.log(err);
        
        
        res.redirect('/nails');
    });
})


// Edit Route //
router.get('/:nailId/edit', (req, res) => {
    db.Nails.findById(req.params.nailId, (err, foundNail) => {
        if (err) return console.log(err);

        res.render('edit.ejs', { oneNail: foundNail });
    })
})


//////////     Edit && Update go hand in hand      //////////


// Update Route //
router.put('/:nailId', (req, res) => {
    db.Nails.findByIdAndUpdate(req.params.nailId, req.body, (err, updateNail) => {
        if (err) return console.log(err);
        
        res.redirect('/nails/' + req.params.nailId);
    })
})


// Destroy Route // 
router.delete('/:nailId',(req, res) => {
    db.Nails.findByIdAndDelete(req.params.nailId, (err) => {
        if (err) return console.log(err);
        res.redirect('/nails');
    })
    //console.log("Ay yo mama")
})













module.exports = router; 



