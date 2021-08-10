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

app.use('/track', trackController)

//Index Route///////////////////
app.get('/track', (req,res) => {
   res.send('Welcome to Songify') 
})
// NEW /////////////// 
app.get('/track/new', (req,res) => {
   res.send('NEW TRACK') 
})
// CREATE////////
app.post('/track', (req,res) => {
   res.send('CREATE TRACK') 
})

// SHOW //////////
app.get('/track/:id', (req,res) => {
    res.send('SEE TRACK') 
 })
//EDIT/////////////
app.get('/track/:id/edit', (req,res) => {
    res.send('EDIT TRACK') 
 })
//UPDATE /////////
app.put('/track/:id', (req,res) => {
    res.send('UPDATE TRACK')
})

// DELETE /////////
app.delete('/track/:id', (req,res) => {
    res.send('DELETE TRACK')
})




app.listen(port, () => {
    console.log(`The server is running on port: ${port} 💿 `);
    rowdyResults.print()
})