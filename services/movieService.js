const Movie = require(`./../models/movieModel`);

class MovieService {
  getMovies(data) {
    const query = Movie.find().limit(data);
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
    const query = Movie.exists({ _id: id });
    return query;
  }

  updateMovie(id, data) {
    const query = Movie.findByIdAndUpdate(id, data);
    return query;
  }

  deleteMovie(id) {
    const query = Movie.findByIdAndRemove(id);
    return query;
  }
}

module.exports = MovieService;
