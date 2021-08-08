
/* REQUIRED MODULES */
const express = require('express');
const rowdy = require('rowdy-logger');
const methodOverride = require('method-override');

/* DATABASE & MODULES */
const planetsController = require('./controllers/planetsController.js');

/* CONFIGURATION */
const app = express();
const port = 4000;
app.set('view engine', 'ejs');
const rowdyResults = rowdy.begin(app);



/* MIDDLEWARE */
app.set('view engine', 'ejs'); //allows ejs to be used to render the view pages
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use('/planets', planetsController);

/* ROUTES */

// Index page
app.get('/', (req, res) => {
    res.render('index.ejs');
});



/* START THE SERVER */
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
    rowdyResults.print();
})