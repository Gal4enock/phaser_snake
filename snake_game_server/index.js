const express = require('express');
const mongoose = require("mongoose");
const gameRouter = require('./routes/game.routes');

const app = express();

const DB_PASSWORD = '123456789Aa';
const DB_NAME = 'db-game';

const MONGO_URL = `mongodb+srv://JonhSnow:${DB_PASSWORD}@cluster0.heyeb.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

start();

function start() {
 const connection = mongoose.connect(MONGO_URL, {
   useUnifiedTopology: true 
  });
  connection
    .then(() => { console.log("Database connection successful") })
    .catch((err) => {
      console.log(`Server not running. Error message: ${err.message}`)
      process.exit(1)
    }
  );
}

app.use(express.json());
app.use('/', gameRouter)
app.listen(3000, () => {
  console.log('Listening with CORS on port..', 3000);
})