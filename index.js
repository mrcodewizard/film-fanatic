const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require('./config/db');

/** setting up essential middlewares */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static('views'));

const genresRoute = require('./routes/genres');
const moviesRoute = require('./routes/movies');
const actorsRoute = require('./routes/actors');
const categoriesRoute = require('./routes/categories');

const actorsModel = require('./models/actors');

app.use("/api/genres", genresRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/actors", actorsRoute);
app.use("/api/movies", moviesRoute);

app.get("/actors/create", (req, res, next) => {
    res.render("actor");
})


/** connecting to mongodb database **/

async function createConnection() {
    const mongoDbUrl = config.getConfig();
    await mongoose.connect(mongoDbUrl);
}

createConnection()
    .then(res => console.log("Connection established"))
    .catch(err => console.log("Connection error", err));


const port = process.env.PORT || 3000 ;
app.listen(port, () => {
    console.log("Server started on port " + port);
});

