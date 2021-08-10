const express = require('express')
const db = require('../models/index.js')
const router = express.Router()

// INDEX
router.get('/', (req, res) => {
    db.Cat.find({}, (err, allCats) => {
        if(err) return console.log(err)

        res.render('index.ejs', { allCats: allCats })
    })
})

// NEW
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// SHOW 
router.get('/:catID', (req, res) => {
    db.Cat.findById(req.params.catID, (err, foundCat) => {
        if(err) return console.log(err)

        res.render('show.ejs', { oneCat: foundCat})
    })
})

// CREATE 
router.post('/', (req, res) => {
    db.Cat.create(req.body, (err, createdCat) => {
        if (err) return console.log(err)

        res.redirect('/cats')
    })
})

// DELETE
router.delete('/:catId', (req, res) => {
    db.Cat.findByIdAndDelete(req.params.catId, (err) => {
        if (err) return console.log(err)

        res.redirect('/cats')
    })
})

module.exports = router