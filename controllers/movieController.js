class MovieController {
  constructor(movieService) {
    this.movieService = movieService;
  }

  async getMovies(req, res) {
    const { limit } = req.query;
    const limitToNumber = parseInt(limit);

    const query = await this.movieService.getMovies(limitToNumber);
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
    const { body } = req;
    const { name, category, type } = req.body;
    console.log(body);
    if ((name, category, type)) {
      try {
        if (req.file) {
          const { filename } = req.file;
          const newBody = {
            name: name,
            category: category,
            image: filename,
            type: type,
          };
          const query = await this.movieService.addMovie(newBody);
        } else {
          const query = await this.movieService.addMovie(body);
        }
        res.status(200).send("Registro agregado");
      } catch (error) {
        res.sendStatus(500);
      }
    } else {
      return res.status(400).send("Falta información requerida");
    }
  }

  async updateMovie(req, res) {
    const { body } = req;
    const { id } = req.params;

    if (id && body) {
      try {
        if (req.file) {
          const { name, category, type } = req.body;
          const { filename } = req.file;
          const newBody = {
            name: name,
            category: category,
            image: filename,
            type: type,
          };
          const query = await this.movieService.updateMovie(id, newBody);
        } else {
          const query = await this.movieService.updateMovie(id, body);
        }
        res.status(200).send("Actualización registrada con exito");
      } catch (error) {
        res.sendStatus(500);
        console.log(error);
      }
    } else {
      return res.status(400).send("Faltan completar campos.");
    }
  }

  async deleteMovie(req, res) {
    const { id } = req.params;

    if (id.length === 24) {
      const checkId = await this.movieService.checkMovieId(id);
      if (checkId === true) {
        try {
          const query = await this.movieService.deleteMovie(id);
          res.status(200).send("Registro borrado");
        } catch (error) {
          res.status(500).send("Error al borrar");
        }
      } else {
        res.status(400).send("El id ingresado no existe");
      }
    } else {
      res.status(400).send("El id ingresado no existe");
    }
  }
}

module.exports = MovieController;
