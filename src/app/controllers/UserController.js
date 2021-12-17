const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(request, response) {
    const { orderBy } = request.query;

    const users = await UsersRepository.findAll(orderBy);

    return response.json(users);
  }

  async store(request, response) {
    const { name, cpf } = request.body;

    if (!name || !cpf) {
      return response.status(400).json({ error: 'Name and CPF are required!' });
    }

    const userExists = await UsersRepository.findByCPF(cpf);

    if (userExists) {
      return response.status(400).json({ error: 'CPF is already in use!' });
    }

    const user = await UsersRepository.create({
      name, cpf,
    });

    return response.json(user);
  }
}

module.exports = new UserController();
