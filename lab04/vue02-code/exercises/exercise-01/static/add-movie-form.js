const addMovieForm = {
    template: `
    <div class="row justify-content-center mb-4">
        <div class="col-auto">
            <button @click="showAddMovieForm" type="button" class="btn btn-success">
                <i class="fas fa-plus"></i> Add Movie
            </button>
        </div>
    </div>
    <div class="row" v-if="adding">
        <div class="col">
            <form>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input v-model="newMovie.title" type="text" class="form-control" id="title" placeholder="Enter title">
                </div>
                <div class="form-group">
                    <label for="plot">Plot</label>
                    <textarea v-model="newMovie.plot" class="form-control" id="plot">
                </textarea>
                </div>
                <div class="form-group">
                    <label for="poster">Poster link</label>
                    <input v-model="newMovie.poster" type="text" class="form-control" id="poster" placeholder="Enter poster link">
                    <img v-bind:src="newMovie.poster" alt="" />
                </div>
                <div class="form-group">
                    <label for="release">Release date</label>
                    <input v-model="newMovie.released" type="date" class="form-control" id="release">
                </div>
                <button @click.prevent="addMovie" type="submit" class="btn btn-primary">Submit</button>
                <button @click.prevent="hideAddMovieForm" type="submit" class="btn btn-danger">Cancel</button>
            </form>
        </div>
    </div>`,
    data(){
        return {
            adding: false,
            newMovie: { }
        }
    },
    methods: {
        showAddMovieForm() {
            this.adding = true;
        },
        hideAddMovieForm() {
            this.adding = false;
            this.resetNewMovie();
        },
        resetNewMovie() {
            this.newMovie = {
                "title": "",
                "plot": "",
                "poster": "",
                "released": new Date().toISOString().slice(0, 10)
            }
        },
        addMovie() {
            axios.post("/api/movies/", this.newMovie)
                .then(response => {
                    this.movies.push(response.data);
                    this.hideAddMovieForm();
                });
        }
    },
    created() {
        this.resetNewMovie();
    }
}