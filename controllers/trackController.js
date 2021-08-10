const express = require('express');
const router = express.Router();

// Mongoose DATABASE ////////
const db = require('../models/index')


router.get('/test/:firstName', (req, res) => {
    console.log(req.params);
  
    res.send('You hit the test route,')
  })






module.exports = router