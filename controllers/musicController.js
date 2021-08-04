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

//create
router.post('/', (req,res) => {
    console.log(req.body)

    if(req.body.wouldRecommend === 'on'){
        req.body.wouldRecommend = true
    } else {
        req.body.wouldRecommend = false
    }

    music.push(req.body)
    res.redirect('/music')
})

//delete
router.delete('/:musicIndex', (req, res) => {
    const musicIndex = req.params.musicIndex

    music.splice(musicIndex, 1)

    res.redirect('/music')
})

//edit
router.get('/:musicIndex/edit', (req, res) => {
    res.render('edit.ejs', {
        oneSong: music[req.params.musicIndex],
        index: req.params.fruitIndex
    })
})







module.exports = router
