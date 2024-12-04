const filmTable = {
    template: `
    <div class="row">
        <div class="col">
            <table class="table responsive">
                <thead class="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Plot</th>
                        <th>Poster</th>
                        <th>Release date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="movie in movies" :key="movie.id">
                        <td>{{ movie.title }}</td>
                        <td>{{ movie.plot }}</td>
                        <td><img v-if="movie.poster" v-bind:src="movie.poster" alt="" @error="replaceByDefault"></td>
                        <td>{{ movie.released }}</td>
                        <td>
                            <button @click="deleteMovie(movie.id)" type="button" class="btn btnsm">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `,
    data() {
        return {
            movies: [],
        }
    },
    methods: {
        listMovies() {
            axios
                .get("http://localhost:3000/api/movies")
                .then(response => {
                    this.movies = response.data;
                    console.log(this.movies);
                    this.movies.forEach((movie) => {
                        if (movie.poster != null) {
                            movie.poster = movie.poster.replace("http://ia.media-imdb.com/", "https://m.media-amazon.com/");
                        }
                        else {
                            movie.poster = defaultImgUrl;
                        }
                    });
                });
        },
        replaceByDefault(event) {
            event.target.src = defaultImgUrl;
        },
        deleteMovie(moviesId) {
            axios.delete("/api/movies/" + moviesId)
                .then(response => {
                    this.movies.splice(this.movies.findIndex(item => item.id === moviesId), 1);
                });
        }, 
    },
    created() {
        this.listMovies();
        
    }
}