const mongoose = require('mongoose');

async function savePoints(req, res) {
  res.status(200).json('its ok');
}

async function getRating(req, res) {
  res.status(200).json('well done');
}

module.exports = {
  savePoints,
  getRating
}