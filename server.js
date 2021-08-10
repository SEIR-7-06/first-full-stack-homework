/// Required modules
const express = require('express')
const rowdy = require('rowdy-logger')

//Controller//////////
const trackController = require('./controllers/trackController')

//variables
const app = express()
const port = 4000
const rowdyResults = rowdy.begin(app)
 
// MIDDLEWARE ////////

app.use('/tracks', trackController)


// // NEW /////////////// 
// app.get('/tracks/new', (req,res) => {
//    res.send('NEW TRACK') 
// })
// CREATE////////
app.post('/tracks', (req,res) => {
   res.send('CREATE TRACK') 
})

// SHOW //////////
app.get('/tracks/:id', (req,res) => {
    res.send('SEE TRACK') 
 })
//EDIT/////////////
app.get('/tracks/:id/edit', (req,res) => {
    res.send('EDIT TRACK') 
 })
//UPDATE /////////
app.put('/tracks/:id', (req,res) => {
    res.send('UPDATE TRACK')
})

// DELETE /////////
app.delete('/tracks/:id', (req,res) => {
    res.send('DELETE TRACK')
})




app.listen(port, () => {
    console.log(`The server is running on port: ${port} 💿 `);
    rowdyResults.print()
})