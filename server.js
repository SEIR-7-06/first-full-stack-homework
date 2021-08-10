////////////////// REQUIRED ////////////////////
const express = require('express')
const rowdy = require('rowdy-logger')
const methodOverride = require('method-override')

////////////////// CONFIG ////////////////////
const catsController = require('./controllers/catsController.js')
const app = express()
const PORT = 4000
const rowdyResults = rowdy.begin(app)

////////////////// MIDDLEWARE ////////////////////
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use('/cats', catsController)

////////////////// ROUTES ////////////////////

// Home Page
app.get('/', (req, res) => {
    res.render('index.ejs')
})

////////////////// START SERVER ////////////////////
app.listen(PORT, () => {
    console.log('Server is running on localhost:', PORT)
    rowdyResults.print
})