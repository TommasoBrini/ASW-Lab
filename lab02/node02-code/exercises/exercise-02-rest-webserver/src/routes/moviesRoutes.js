const express = require('express');
const movieControllers = require('../controllers/moviesControllers')

const router = express.Router();


router.route('/')
    .get(movieControllers.getAllMovies)  // handle the GET for all movies
    .post(movieControllers.createMovie); // handle the POST for creating a new movie



router.route('/:id').get(movieControllers.getMovie) // handle the GET for a single movie
    .put(movieControllers.updateMovie) // handle the PUT for updating a single movie
    .delete(movieControllers.deleteMovie); // handle the DELETE for a single movie


module.exports = router;