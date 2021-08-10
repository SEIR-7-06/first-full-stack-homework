/// Required modules
const express = require('express')
const rowdy = require('rowdy-logger')
const methodOverride = require('method-override')

//Controller//////////
const trackController = require('./controllers/trackController')

//variables
const app = express()
const port = 4000
const rowdyResults = rowdy.begin(app)
 
// MIDDLEWARE ////////
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false })) /// allows create route to Adds to DB
app.use('/tracks', trackController)


app.listen(port, () => {
    console.log(`The server is running on port: ${port} 💿 `);
    rowdyResults.print()
})