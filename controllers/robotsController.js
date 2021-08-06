const express = require('express');
const db = require('../models/index.js')
const router = express.Router();

router.get('/', (req, res) =>{
    db.Robot.find({}, (err, allRobots) => {
        if (err) return console.log(err)
        res.render('robots/robotsIndex.ejs', {allRobots: allRobots})
    })
})



module.exports = router