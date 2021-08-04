const express = require('express')
const router = express.Router()
const music = require('../models/musicModel.js')

// router.get('/test/:firstName', (req,res) => {
//     console.log(req.params)
//     res.send('You hit the test route')
// })  test 

//Index Router

router.get('/', (req,res) => {
    res.render('index.ejs', { allBands: music })
})

module.exports = router