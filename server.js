const express = require('express');
const app = express();
const PORT = 4000;


app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.listen(PORT, () => {
    console.log(`Running on localhost port#: ${PORT}`);
  })