// Required //

const express = require('express');
const rowdy = require('rowdy-logger');
const methodOverride = require('method-override');

// Database and Modules // 
 const nails = require('./models/NailsModel.js')
// const fruitsController = require('./controllers/fruitsController.js');

// Variables // 
const app = express();
const port = 4000;
const rowdyResults = rowdy.begin(app);


// Middleware// 
app.set('view engine', 'ejs');


// Check if form data was sent in the request.
// If so adds in to the request body (req.body)
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));


//////// ROUTES //////

// HomePage //
app.get('/',(req,res) => {
    res.send("Welcome to THE GIRLSSS ROOMMM!! 💅🏽🧚🏽‍♀️💗")
})

// Index Route //
app.get('/nails', (req, res) => {
    res.render('index.ejs', {
        allNails: nails
    })
})

// New Route // 
app.get('/nails/new', (req, res) => {
    res.render('new.ejs')
})

// Show Route // 
app.get('/nails/:nailIndex', (req, res) => {
    res.render('show.ejs', {
        oneNail: nails[req.params.nailIndex]
    })
})



// Start the Sever // 
app.listen(port, () => {
    console.log(`Lets get into it SIS! ${port}🌈`);
    rowdyResults.print();
})