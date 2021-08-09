/// Required modules
const express = require('express')

//variables
const app = express()
const port = 4000



app.listen(port, () => {
    console.log(`The server is running on port: ${port} 💿 `);
})