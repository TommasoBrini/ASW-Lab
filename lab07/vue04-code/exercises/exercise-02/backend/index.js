const express = require('express');
const mongoose = require('mongoose');
const movieRouter = require('./src/routes/movieRoutes');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/dbMovies');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/movies', movieRouter);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
