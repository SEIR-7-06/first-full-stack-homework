/* Required Modules */
const express = require('express')         
const methodOverride = require('method-override');
const rowdy = require('rowdy-logger')
/* Link Controller */
const capyController = require('./controller/CapyController.js');

/* Define Variables */
const app = express() 
const port = 4000
const rowdyResults = rowdy.begin(app)

/* Middleware */
app.use(methodOverride('_method')); 
app.use(express.urlencoded({ extended: false }))  
app.use('/capy', capyController); 

/* app Configuration */
app.set('view engine', 'ejs')

/* Homepage Route */
app.get('/', (req, res) => {
    res.send('Welcome to CapyTown');
})

/* Start Server */
app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
        rowdyResults.print()
})