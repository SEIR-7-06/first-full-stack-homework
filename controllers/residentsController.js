const express = require('express') 
const db = require('../models/index.js')
const router = express.Router()
// const residents = require('../models/residentModel.js')

// Index Route
router.get('/', (req,res) => {
    db.Resident.find({}, (err, allResidents) => {
        if (err) return console.log(err)
        res.render('residents/residentsIndex.ejs', { allResidents: allResidents })
    })
})

// New Route
router.get('/new', (req, res) => {
    res.render('residents/residentsNew.ejs')
})

router.post('/', (req, res) => {
    console.log(req)
    db.Resident.create({residentName}, (err, createdResident) => {
        if (err) return console.log(err) 
        console.log(createdResident)
        res.redirect('/residents')
    })
})

module.exports = router