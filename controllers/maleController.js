//need express in here b/c i need it to do ish with data
const express = require('express');
const router = express.Router();

//stimulating a mongodb database environment
const db = require('../models/index.js')

//Index Route --> needs ejs
router.get('/', (req, res) => {
    res.send("you've reached the index")
})

//Show Route --> needs ejs
router.get('/:maleId', (req, res) => {
    res.send("you've reached the show route")
})

//New Route --> needs ejs, form and sends form to create route 
router.get('/new', (req, res) => {
    res.send("let's add a new favorite lead")
})

//Create Route
router.post('/', (req, res) => {
    console.log(req.body)
})

//Edit Route --> needs ejs, form and sends form to update route
router.get('/:maleId/edit', (req, res) => {
    res.send("Let's edit a form")
})
//Update Route --> 
router.put('/:maleId', (req,res) => {
    console.log(req.body);
})

//Delete Route
router.delete('/:maleId', (req, res) => {
    
})

module.exports = router;