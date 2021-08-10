const express = require('express');
const db = require('../models/index.js')
const router = express.Router();


router.get('/', (req, res) => {
    db.Robot.find({}, (err, allRobots) => {
        if (err) return console.log(err)
        res.render('./robots/robotsIndex.ejs', { allRobots: allRobots })
    })
})


router.get('/new', (req, res) => {
    res.render('./robots/robotsnew.ejs')
})

router.get('/:id', (req, res) => {
    db.Robot.findById(req.params.id, (err, foundRobot) => {
        if (err) return console.log(err);
        res.render('robots/robotsShow.ejs', { robot: foundRobot })
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
    let data = {
        name: req.body.robotName,
        price: req.body.robotPrice,
        company: req.body.robotCompany,
        launchDate: req.body.robotLaunchDate
    }
    db.Robot.create(data, (err, createdRobot) => {
        if (err) return console.log(err)
        console.log(createdRobot)
        res.redirect('/robots')
    })
})


router.get('/:id/edit', (req, res) => {
    db.Robot.findById(req.params.id, (err, foundRobot) => {
        if (err) return console.log(err)
        res.render('robots/robotsEdit.ejs', {
            robot: foundRobot
        })
    })
})

router.put('/:id', (req, res) => {
    db.Robot.findByIdAndUpdate(req.params.id, req.body, (err, foundRobot) => {
        if (err) return console.log(err)
        res.redirect(`/robots/${req.params.id}`)
    })
})

router.delete('/:id', (req, res) => {
    db.Robot.findByIdAndDelete(req.params.id, (err, deleted) => {
        if (err) return console.log(err);
        res.redirect('/robots')
    })
})

// router.get('/:id', (err, res) => {
//     db.Robot.find({}, (err, ))
// })

module.exports = router