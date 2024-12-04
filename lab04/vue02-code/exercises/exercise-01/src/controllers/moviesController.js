const movies = require("./movies.json");

exports.showIndex = (req, res) => {
    res.sendFile(global.appRoot + '/www/movies.html');
};

exports.listMovies = (req, res) => {
    res.json(movies);
};

exports.readMovie = (req, res) => {
    const movie = movies.find(m => m.id === req.params.id);
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).send({
            description: 'Movie not found'
        });
    }
};

exports.createMovie = (req, res) => {
    const newMovie = req.body;
    newMovie.id = String(movies.length + 1); // Generate a new ID
    movies.push(newMovie);
    res.status(201).json(newMovie);
};

exports.updateMovie = (req, res) => {
    const index = movies.findIndex(m => m.id === req.params.id);
    if (index !== -1) {
        movies[index] = { ...movies[index], ...req.body };
        res.json(movies[index]);
    } else {
        res.status(404).send({
            description: 'Movie not found'
        });
    }
};

exports.deleteMovie = (req, res) => {
    const index = movies.findIndex(m => m.id === req.params.id);
    if (index !== -1) {
        movies.splice(index, 1);
        res.json({ message: 'Movie successfully deleted' });
    } else {
        res.status(404).send({
            description: 'Movie not found'
        });
    }
};
