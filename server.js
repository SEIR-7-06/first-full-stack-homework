////////////////// REQUIRED ////////////////////
const express = require('express')
const rowdy = require('rowdy-logger')
const methodOverride = require('method-override')

////////////////// CONFIG ////////////////////
const app = express()
const PORT = 4000
const rowdyResults = rowdy.begin(app)

////////////////// MIDDLEWARE ////////////////////
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))

////////////////// ROUTES ////////////////////

// Home Page
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(PORT, () => {
    rowdyResults.print
})