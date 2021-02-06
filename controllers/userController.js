const passport = require("passport");

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUser(req, res) {
    const query = await this.userService.getUser();
    res.send(query);
  }

  async getUserById(req, res) {
    const { id } = req.params;
    const query = await this.userService.getUserById(id);
    console.log(query, id);
    res.send(query);
  }

  async addUser(req, res) {
    const { body } = req;
    const { name, password, isAdmin } = body;
    const checkUser = await this.userService.checkUser(name);
    console.log(body);
    if (name && password && isAdmin) {
      if (checkUser != true) {
        try {
          const query = await this.userService.addUser(body);
          res.status(200).send("Registro cargado con éxito");
        } catch (error) {
          res.sendStatus(500);
        }
      } else {
        res.status(400).send("El usuario ya existe");
      }
    } else {
      res.status(400).send("Faltan ingresar campos obligatorios");
    }
  }
}

module.exports = UserController;
