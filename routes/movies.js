const express = require('express');
const router = express.Router();
const Movies = require('../controllers/Movies');

const genres = ['three days to see', 'apex trigger', 'time to act'];

router.get('/list', Movies.getAllMovies);

router.get('/:id', (req, res) => {
    res.send('Single movie found');
});

router.post('/add-movie', (req, res) => {
    res.send('movie added successfully');
});

module.exports = router;
