const express = require('express');
const mongoose = require('mongoose');
const movieRouter = require('./src/routes/movieRoutes');

mongoose.connect('mongodb://localhost:27017/dbMovies');

const app = express();
app.use(express.json());

app.use('/movies', movieRouter);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
