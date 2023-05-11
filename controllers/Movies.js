
const movies = ['three days to see', 'apex trigger', 'time to act'];
const Movies = {
    getAllMovies:  (req, res) => {
        res.send(movies);
    }
}


module.exports = Movies