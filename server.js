const express = require('express');
const app = express();
const gameRouter = require('./routes/gameRoutes.js')
const methodOverride = require('method-override')
const PORT = 4000;
const rowdy = require('rowdy-logger')
const rowdyResults = rowdy.begin(app)

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));


app.use('/game', gameRouter);
app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.listen(PORT, () => {
    rowdyResults.print();
    console.log(`Running on localhost port#: ${PORT}`);
  })