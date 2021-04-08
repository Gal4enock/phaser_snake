const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const RatingSchema = new Schema({
  name: String,
  userId: String,
  totalPoints: Number,
  token: String
})

const Rating = mongoose.model("Rating", RatingSchema);

module.exports = Rating;