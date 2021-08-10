/// Required modules
const express = require('express')

//variables
const app = express()
const port = 4000
 
// Mongoose DATABASE ////////
const db = require('./models/index')

//Index Route///////////////////
app.get('/', (req,res) => {
   res.send('Welcome to Songify') 
})
// NEW /////////////// 
app.get('/songs/new', (req,res) => {
   res.send('NEW TRACK') 
})
// CREATE////////
app.post('/songs', (req,res) => {
   res.send('CREATE TRACK') 
})

// SHOW //////////
app.get('/songs/:id', (req,res) => {
    res.send('SEE TRACK') 
 })
//EDIT/////////////
app.get('/songs/:id/edit', (req,res) => {
    res.send('EDIT TRACK') 
 })
//UPDATE /////////
app.put('/songs/:id', (req,res) => {
    res.send('UPDATE TRACK')
})

// DELETE /////////
app.delete('/songs/:id', (req,res) => {
    res.send('DELETE TRACK')
})




app.listen(port, () => {
    console.log(`The server is running on port: ${port} 💿 `);
})