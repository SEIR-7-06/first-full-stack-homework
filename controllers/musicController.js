
const db = require('../models/index.js');



// add new music data to data base
db.Musicians.create(req.body, (err)=>{
    if (err) return console.log (err);
    res.redirect('/musicians');
});

router.get('/', (req, res) => {
    // find all the musicians
    db.Musicians.find({}, (err, allMusicians) => {
      if (err) return console.log(err);
      
      // render the musicians index template with the data
      res.render('index.ejs', { allMusicians: allMusicians });
    });
  });
  