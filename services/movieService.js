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
}

module.exports = MovieService;
