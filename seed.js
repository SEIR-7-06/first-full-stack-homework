const musicians = require('./models')
const data = require('./models/musicianModel')
musicians.insertMany(data, (err, addMusicians)=> {
    if (err) {console.log(err)     
}
else {console.log(addMusicians)
}})