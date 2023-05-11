const express = require('express');
const router = express.Router();

const categories = ['bollywood', 'lolly wood', 'hollywood'];

router.get('/list', (req, res) => {
    res.send(categories);
});



module.exports = router;