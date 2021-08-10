const express = require('express')
const router = express.Router()
const db = require('../models/index.js')

//Index Route
router.get('/', (req,res) => {
    db.Lamp.find({}, (err, allLamps) => {
        if (err) return console.log(err)
        console.log(allLamps)
        res.send('STUB: Here is the LAAAAAMPZ you requested sir mothery')
    })
})

// New route - show a form for the user to add a LAMP
//1. Create an EJS template with a form to add a LAMP
//2. Render the form in the /new route
router.get('/new', (req,res) => {
    res.render('lamps/lampsNew')
       //when you say 'render' 
    //express immediately knows to look inside 'views' folder
})


// Show route
router.get('/:id', (req, res) => {
    res.send('STUB: Heres is the individual article you requested!')
})


// Edit route
router.get('/:id/edit', (req, res) => {
    res.send('STUB: Here is the form for editing that article!')
})


// Update route
router.put('/:id', (req, res) => {
    res.send('STUB: Article has been updated, thanks!')
})

router.delete('/:id', (req, res) => {
    res.send('STUB: Article has been deleted!')
})

module.exports = router;