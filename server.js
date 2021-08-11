const express = require('express'); // Pulling in the express package into this file
const app = express();
const PORT = 4000;






app.get('/musicians/:musicIndex', (req, res) =>{
    res.send(musicians[req.params.musicIndex]);
});

// const rowdy = require('rowdy-logger')
// const methodOverride = require('method-override');



/* Middleware */
app.set('view engine', 'ejs');




/* Start the Server */
app.listen(PORT, () => {
  // Start the server on the specified port
  // After it starts, call the callback function
  console.log(`Your server is running on port: ${PORT} 🚀`);
//   rowdyResults.print()
});