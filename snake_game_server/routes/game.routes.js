const express = require('express');
const router = express.Router();

const { savePoints, getRating } = require('../controllers/game.controllers');

router.get('/ratings', getRating);
router.post('/save', savePoints);

module.exports = router