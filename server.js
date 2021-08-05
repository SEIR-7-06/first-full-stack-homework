//this is my server it is the routes and middleware


//Dependencies
const express = require('express');
const rowdy = require('rowdy-logger')
//helps with methods and overriding them in forms for actions
const methodOverride = require('method-override');

//Databases & Models
const maleController = require('./controllers/maleController.js')

// Variables
const app = express();
const port = 4000;
const rowdyResults = rowdy.begin(app);

// Middleware
app.set('view engine', 'ejs'); //allows ejs to be used

//Uses
app.use(methodOverride('_method')); //keeps an eye out for _method queries
app.use(express.urlencoded({extended: false})); //checks for data from forms
//for pulling our routes from our controller later --> NEED TO DO
app.use('/male', maleController)


//Start the Server
app.listen(port, () => {
    console.log("Hello")
    rowdyResults.print()
});
