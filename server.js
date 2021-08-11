const express = require('express')
const rowdy = require('rowdy-logger')
// const methodOverride = require('method-override')

////////////////// Database & Models //////////////////
const residents = require('./models/residentModel.js')
const residentsController = require('./controllers/residentsController.js')
const { Router } = require('express')

////////////////// Configuration //////////////////
const app = express()
const PORT = 4000
const rowdyResults = rowdy.begin(app)
app.set('view engine', 'ejs')

////////////////// Middleware //////////////////
// app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false })) 
app.use(express.static('public'))

////////////////// Controller //////////////////
app.use('/residents', residentsController);

// Homepage Route
app.get('/', (req, res) => {
    res.render('index.ejs')
})

////////////////// Start the Server //////////////////
app.listen(PORT, () => {
    console.log(`Your server is running on port: ${PORT} 🚀`)
    rowdyResults.print()
})

