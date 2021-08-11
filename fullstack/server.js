// REQUIRED MODULES ////////////
const express = require('express')
const rowdy = require('rowdy-logger')

// VARIABLES //////////////
const app = express()
const port = 4000
const rowdyResults = rowdy.begin(app)
const userController = require('./controller/musicController.js')


//////////MIDDLEWARE///////////
app.use('/fullstack', musicController);

///////// 🏁 INDEX ROUTE //////////////
app.get('/fullstack', (req, res) => {
    res.send('WELCOME TO BL')
})

/////// 🆕 NEW ROUTE //////////////
app.get('/fullstack/new', (req, res) => {
    res.send('NEW fullstack Profile page')
})

// ///////// 👩‍🎨 CREATE ROUTE //////////////
app.post('/fullstack', (req, res) => {
    res.send('CREATED fullstack Profile page')
})


// ///////// 🎙 SHOW ROUTE //////////////
app.get('/fullstack/:id', (req, res) => {
    res.send('SHOW fullstack Profile page')
})

// ///////// ✍️ EDIT ROUTE //////////////
app.get('/fullstack/:id/edit', (req, res) => {
    res.send('EDIT fullstack Profile page')
})

// ///////// 💻 UPDATE ROUTE //////////////
app.put('/fullstack/:id', (req, res) => {
    res.send('UPDATE musician Profile page')
})

// ///////// 🗑 Delete ROUTE //////////////
app.delete('/fullstack/:id', (req, res) => {
    res.send('DELETE musician Profile page')
})


/// START SERVER ////////////
app.listen(port, () => {
    console.log(` 🎨 💿 👨‍🎤 The server is running on port: ${port} 🎨 💿 👨‍🎤 `);
    rowdyResults.print()
})