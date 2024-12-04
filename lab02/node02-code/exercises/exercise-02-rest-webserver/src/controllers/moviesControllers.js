const movies = require('./movies.json');


// create logic for returning all movies
const getAllMovies = (req, res) => {
    res.json(movies);
}

// create logic for returning a single movie based on the id
const getMovie = (req, res) => {
    let i = movies.findIndex((item) => req.params.id == item.id);
    if (i > -1) {
        return res.json(movies[i]);
    } else {
        return res.status(404).send('<h1>Movie not found</h1>');
    }
}

// create logic for adding a new movie
const createMovie = (req, res) => {
    const newMovie = req.body;
    const nItem = movies.length;
    movies.push(newMovie);
    if(movies.length > nItem){
        res.status(201).json({description: 'New Movie Added'});
    } else{
        res.status(500).json({message: 'Internal Server Error'});
    }
}

// create logic for updating a movie
const updateMovie = (req, res) => {
    const movie = req.body;
    let i = movies.findIndex((item) => req.params.id == item.id);
    if (i > -1) {
        movies.splice(i, 1, movie);
        res.status(201).json({ description: "movie updated" })
    }
    else {
        res.status(404).json({ description: 'movie not found' });
    }
}

const deleteMovie = (req, res) => {
    let i = movies.findIndex((item) => req.params.id == item.id)
    if (i > -1) {
        movies.splice(i, 1);
        res.json({ description: "movie deleted" })
    }
    else {
        res.status(404).json({ description: 'movie not found' });
    }
}

// create logic for deleting a movie

module.exports = { 
    // export all the functions you created
    getAllMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}
