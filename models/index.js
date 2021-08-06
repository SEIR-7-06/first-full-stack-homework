/* Require Modules */
const mongoose = require('mongoose')

/* Create Connection Address */
const connectionString = 'mongodb://localhost:27017/capydb'

/* Connect and Hide Deprecation warnings */
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    });

/* Listen for mongoose.connection, and run callback function */
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString} 🥭`);
});

/* Export data model */
module.exports = {
    Capy: require('./Capy.js')
    }