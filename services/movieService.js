const Movie = require(`./../models/movieModel`);

class MovieService {
  getMovies() {
    const query = Movie.find().exec();
    return query;
  }

  getMovieById(id) {
    const query = Movie.findOne({ _id: id });
    return query;
  }

  addMovie(data) {
    const query = new Movie(data);
    return query.save();
  }

  checkMovieId(id) {
    const query = Movie.exists({ id: id });
    return query;
  }

  updateMovie(id, data) {
    const query = Movie.findByIdAndUpdate(id, data);
    return query;
  }

  deleteMovie(id) {
    const query = Movie.findByIdAndDelete(id);
    return query;
  }
}

module.exports = MovieService;
