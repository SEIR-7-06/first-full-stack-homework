const express = require('express');
const router = express.Router();
const db = require('../models/game.js')

router.get('/', (req, res) => {
    db.find({}, (err, allGame) => {
        if(err) return console.log(err);
        res.render('new.ejs', {
            allGame: allGame
        })
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
    let data = {
        gameName: req.body.gameName,
        gameHours: req.body.gameHours,
        gameGood: req.body.gameGood,
    }
    db.create(data, (err, createdGame) => {
        if(err) return console.log(err);
        res.redirect('/game')
    })
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    db.findById(req.params.id, (err, foundGame) => {
        res.render('gameShow.ejs', {
            foundGame: foundGame
        })
    })
})

router.get('/:id/edit', (req, res) => {
    db.findById(req.params.id, (err, foundGame) => {
        if(err) return console.log(err)
        res.render('edit.ejs', {
            foundGame: foundGame
        })
    })
})

router.put('/:id', (req, res) => {
    db.findByIdAndUpdate(req.params.id, req.body, (err, foundGame) => {
        if(err) return console.log(err)
        res.redirect(`/game/${req.params.id}`)
    })
})

router.delete('/:id', (req, res) => {
    db.findByIdAndDelete(req.params.id, (err, deleteItem) => {
        if(err) return console.log(err)
        res.redirect(`/game`)
    })
})

module.exports = router;