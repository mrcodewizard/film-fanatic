const mongoose = require('mongoose');

const actorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    bio: {
        type: String,
        required: true,
        min: 10,
    },
    image: {
        data: Buffer,
        contentType: String,
    }
});

const Actors = mongoose.model('actors', actorsSchema);

async function createActor(actorObj) {
    const actor = new Actors({
        name: actorObj.name,
        age: actorObj.age,
        bio: actorObj.bio,
        image: actorObj.image
    });
    const result = await actor.save();
    return result; 
}

module.exports = {
    Actors,
    createActor
};



