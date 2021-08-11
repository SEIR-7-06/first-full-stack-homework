const express = require('express')
const router = express.Router()
const db = require('../models/index.js')

//Index Route
router.get('/', (req,res) => {
    db.Lamp.find({}, (err, allLamps) => {
        if (err) return console.log(err)
        res.render('lamps/lampsIndex.ejs',{
        allLamps: allLamps
        })
    })
})

// New route - show a form for the user to add a LAMP
//1. Create an EJS template with a form to add a LAMP
//2. Render the form in the /new route
router.get('/new', (req,res) => {
    res.render('lamps/lampsNew')
       //when you say 'render' 
    //express immediately knows to look inside 'views' folder
})


//Create Route
router.post('/', (req, res) => {
    console.log(req.body)
    let data = {
        lampType: req.body.name
    }
    db.Lamp.create(data, (err, createdLamp) => {
    if(err) return console.log(err)
    res.redirect('/lamps')
    })
    // res.send('Youve created a lamp!')
})


// Show route
router.get('/:id', (req, res) => {
    console.log(req.params.id)
    db.Lamp.findById(req.params.id, (err, foundLamp) => {
        if(err) return console.log(err)
        // ✅️ 2. Pass the data to an ejs template (articlesShow.ejs)
        // ✅️ 3. res.render() that page
        res.render('lamps/lampsShow', {
            article: foundArticle
        })
    })

})


// Edit route
router.get('/:id/edit', (req, res) => {
  
    db.Lamp.findById(req.params.id, (err, foundLamp) => {
        if(err) return console.log(err);
        res.render('lamps/lampsEdit', {
            lamp: foundLamp
        })
    })
})


// Update route
router.put('/:id', (req, res) => {
    // Check that the data is in req.body w/ a console.log
    console.log(req.body)
    // 1. Use the data that came in from the form in req.body to
    // update the article specified in req.params.id
    db.Lamp.findByIdAndUpdate(req.params.id, req.body, (err, foundLamp) => {
        if(err) return console.log(err)
        res.render('articles/LampsEdit', {
            article: foundLamp
        })
    })
    //Redirect to /lamps
    res.send('STUB: You have updated the Lamps!')
})




//Delete route




module.exports = router;