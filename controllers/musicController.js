const express = require('express');
const router = express.Router();
const music = require('../models/musicModel.js');

//index
router.get('/', (req, res) => {
  res.render('index.ejs', { allMusic: music });
})

//new
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

//show
router.get('/:musicIndex', (req,res) => {
    res.render('show.ejs', {
        oneSong: music[req.params.musicIndex]
    })
})




module.exports = router
