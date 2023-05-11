const express = require('express');
const router = express.Router();
const multer = require('multer');
const Actors = require('../controllers/Actors');

router.get('/', Actors.getActors);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    }
});

var upload = multer({ storage: storage});


router.post('/create', upload.single('image'), Actors.createActor);



module.exports = router;
