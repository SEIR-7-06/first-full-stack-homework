// const mongoose = require('mongoose');
const express = require('express');
const rowdy = require('rowdy-logger');
const methodOverride = require('method-override');
const robotsController = require('./controllers/robotsController')

const app = express();
const port = 3000;
const rowdyResults = rowdy.begin(app);


app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use('/robots', robotsController);

app.get('/', (req, res) => {
    res.send('Welcome to the robots app 🦾')
})

app.listen(port, () => {
    console.log(`This server is running on port: ${port} 🦿`);
    rowdyResults.print()
})


