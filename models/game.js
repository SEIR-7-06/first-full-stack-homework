const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/blogdb';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
mongoose.connection.on('connected', () => {
    console.log(`Mongoose is ON`);
  });
  
const gameSchema = new mongoose.Schema({
    gameName: {type: String, required: true},
    gameHours: {type: Number, min: 0, required: true},
    gameGood: {type: Number, min: 0, max: 1, required: true},
})

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;