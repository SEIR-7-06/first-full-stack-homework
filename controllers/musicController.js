const express = require('express');
const router = express.Router();
const music = require('../models/musicModel.js');

//index
router.get('/', (req, res) => {
  res.render('index.ejs', { allBands: music });
})

module.exports = router