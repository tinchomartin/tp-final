class MovieController {
  constructor(movieService) {
    this.movieService = movieService;
  }

  async getMovies(req, res) {
    const query = await this.movieService.getMovies();
    res.send(query);
  }

  async getMovieById(req, res) {
    const { id } = req.params;
    const query = await this.movieService.getMovieById(id);
    if (query) {
      try {
        console.log(`Registro ${id} encontrado`);
        res.status(200).send(query);
      } catch (error) {
        res.status(500).send("Error al concretar la solicitud");
      }
    } else {
      return res.status(400).send(`El registro ${id} no existe`);
    }
  }

  async addMovie(req, res) {
    const { name, category, type } = req.body;
    if ((name, category, type)) {
      try {
        const query = await this.movieService.addMovie(req.body);
        res.status(200).send("Registro agregado");
      } catch (error) {
        res.status(500).send("Error al crear");
      }
    } else {
      res.status(400).send("Falta información requerida");
    }
  }
}

module.exports = MovieController;
