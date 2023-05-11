const actorsModel = require('../models/actors');
const path = require('path');
const fs = require('fs');

const getActors = (req, res) => {
    const movies = ['john wick', 'imran abbas', 'shahid husssain'];
    res.send(movies);
}

const createActor = async (req, res) => {
    const { name, age, bio } = req.body;
    const image = {
        data: fs.readFileSync(path.join('images/' + req.file.filename)),
        contentType: 'image/png'
    }
    const actor = await actorsModel.createActor({name, age, bio, image});
    console.log("Actor", actor);
}

module.exports = {
    getActors,
    createActor
}