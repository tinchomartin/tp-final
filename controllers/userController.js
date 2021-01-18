class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getUser(req, res) {
    const query = await this.userService.getUser();
    res.send(query);
  }
}

module.exports = UserController;
