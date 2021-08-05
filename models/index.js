//connect our server to mongodb

//pull mongoose into my project
const mongoose = require('mongoose');

//address to mongoDB database
const address = 'mongodb://localhost:27017/animemendb';

//fire off the connection
//.connect opens mongoose's default conenction to mongodb
mongoose.connect(address, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${address}.`)
})

//export data model from here that will serve as collection