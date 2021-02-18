const passport = require("passport");

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUser(req, res) {
    const { limit } = req.query;
    const limitToNumber = parseInt(limit);
    const query = await this.userService.getUser(limitToNumber);
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
    if (name && password) {
      if (checkUser != true) {
        try {
          const query = await this.userService.addUser(body);
          res.status(200).send("Registro cargado con éxito");
        } catch (error) {
          res.status(500).send("Error al agregar");
        }
      } else {
        res.status(400).send("El usuario ya existe");
      }
    } else {
      res.status(400).send("Faltan ingresar campos obligatorios");
    }
  }

  async editUser(req, res) {
    const { body } = req;
    const { id } = req.params;
    if (id.length === 24) {
      const checkUserId = await this.userService.checkUserId(id);

      if (checkUserId === true) {
        console.log(body.length);
        if (body) {
          try {
            const query = await this.userService.editUser(id, body);
            res.status(200).send("Usuario actualizado exitosamente");
          } catch (error) {
            res.status(500).send("Error al actualizar");
          }
        } else {
          res.status(400).send("Ingrese algún dato para modificar");
        }
      }
    }
    return res.status(400).send("No existe el id");
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    if (id.length === 24) {
      const checkUserId = await this.userService.checkUserId(id);
      if (checkUserId === true) {
        try {
          const query = await this.userService.deleteUser(id);
          res.status(200).send("Registro borrado exitosamente");
        } catch (error) {
          res.status(500).send("Error al borrar el registro");
        }
      } else {
        res.status(400).send("El id ingresado no existe");
      }
    } else {
      res.status(400).send("El id ingresado no existe");
    }
  }
}

module.exports = UserController;
