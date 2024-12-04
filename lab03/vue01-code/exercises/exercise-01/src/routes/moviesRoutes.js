const express = require('express');
const moviesController = require('../controllers/moviesController');

const router = express.Router();

router.get('/', moviesController.showIndex);

router.get('/movies-crud', moviesController.showCrud);

router.route('/api/movies')
	.get(moviesController.listMovies)
	.post(moviesController.createMovie);

router.route('/api/movies/:id')
	.get(moviesController.readMovie)
	.put(moviesController.updateMovie)
	.delete(moviesController.deleteMovie);

module.exports = router;
