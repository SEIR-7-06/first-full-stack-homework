const express = require('express');
const router = express.Router();
// const db = require('../views/index.ejs')

router.get('/', (req, res) =>{
    res.render('../views/index.ejs');
})


module.exports = router