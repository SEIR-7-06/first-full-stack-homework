const express = require('express');
const router = express.Router();
const nails = require('../models/NailsModel.js')


// Index Route //
router.get('/', (req, res) => {
    res.render('index.ejs', {
        allNails: nails
    })
})

// New Route // 
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Show Route // 
router.get('/:nailIndex', (req, res) => {
    res.render('show.ejs', {
        oneNail: nails[req.params.nailIndex]
    })
})

// Create Route //
router.post('/', (req, res) => {
    //console.log(req.body)
    nails.push(req.body);
    res.redirect('/nails');
    //console.log('hey you reach the create route')

})


// Edit Route //
router.get('/:nailsIndex/edit', (req, res) => {
    res.render('edit.ejs', {
        oneNail: nails[req.params.nailsIndex],
        index: req.params.nailsIndex
    })
})



















module.exports = router; 



