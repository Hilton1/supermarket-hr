const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async index(request, response) {
    const { orderBy } = request.query;

    const users = await UsersRepository.findAll(orderBy);

    return response.json(users);
  }

  async show(request, response) {
    const { id } = request.params;

    const user = await UsersRepository.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.json(user);
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

  async update(request, response) {
    const { id } = request.params;
    const { name, id_access_level } = request.body;

    const userExists = await UsersRepository.findById(id);

    if (!userExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (!name || !id_access_level) {
      return response.status(400).json({ error: 'Name and ID Access Level is required' });
    }

    const user = await UsersRepository.update(id, { name, id_access_level });

    return response.json(user);
  }

  async delete(request, response) {
    const { id } = request.params;

    const userExists = await UsersRepository.findById(id);

    if (!userExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    await UsersRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new UserController();
