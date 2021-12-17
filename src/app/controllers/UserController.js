const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(request, response) {
    const { orderBy } = request.query;

    const users = await UsersRepository.findAll(orderBy);

    return response.json(users);
  }
}

module.exports = new UserController();
