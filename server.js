const express = require('express')
const rowdy = require('rowdy-logger')
const methodOverride = require('method-override')

const music = require('./models/musicModel.js')
const musicController = require('./controllers/musicController.js')

const app = express()
const port = 4000
const rowdyResults = rowdy.begin(app)

app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use('/music', musicController)

app.get('/', (req, res) => {
    res.send('Music 🎶')
})

app.listen(port, () => {
    console.log(`Your server is running on port: ${port}🐓`)
    rowdyResults.print()
})