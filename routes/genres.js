const express = require('express');
const router = express.Router();

const genres = ['artist', 'horror', 'action'];

router.get('/list', (req, res) => {
    res.send(genres);
});



module.exports = router;

