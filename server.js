//Required Modules
const express = require('express')
const methodOverride = require('method-override')
const rowdy = require ('rowdy-logger')
const lampsController = require('./controllers/lampsController.js')

//Database and Models
const Lamps = require('./models/lamps.js') 

///////////Configuration////////////
const app = express()
const PORT = 3050
const rowdyResults = rowdy.begin(app)
app.set('view engine', 'ejs')


/////////////////// Middleware /////////////////////////
// Sits between the request and the rest of our routes
// Adds additional functionality to our app


// Checks if form data was sent in the request.
// If so adds it to the request body (req.body)
app.use(methodOverride('_method'));
// Listen for form data and attach it to req.body
app.use(express.urlencoded({ extended: false })) 
// Allows express to serve Static files(images, css, client-side JS)
// from the "public" folder
app.use('/lamps', lampsController);


/////////////////// Controllers /////////////////////////
//Mount the controller to server.js
app.use('/lamps', lampsController)


/////////////////// Routes /////////////////////////////
// Home Page Route
app.get('/', (req, res) => {
    res.send('index.ejs')
})

/////////////////// Start the Server ///////////////////
app.listen(PORT, () => {
    // Start the server on the specified port
    // After it starts, call the callback function
    console.log(`Your server is running on port: ${PORT} 🚀`);
    rowdyResults.print()
  });
  