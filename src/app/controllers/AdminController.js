const AdminRepository = require('../repositories/AdminRepository');

class AdminController {
  async index(request, response) {
    const { orderBy } = request.query;

    const users = await AdminRepository.findAll(orderBy);

    return response.json(users);
  }

  async show(request, response) {
    const user = await request.user;

    return response.json(user);
  }

  async store(request, response) {
    const { name, cpf } = request.body;

    if (!name || !cpf) {
      return response.status(400).json({ error: 'Name and CPF are required!' });
    }

    const userExists = await AdminRepository.findByCPF(cpf);

    if (userExists) {
      return response.status(400).json({ error: 'CPF is already in use!' });
    }

    const user = await AdminRepository.create({
      name, cpf,
    });

    return response.json(user);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, id_access_level } = request.body;

    if (!name || !id_access_level) {
      return response.status(400).json({ error: 'Name and ID Access Level is required' });
    }

    const user = await AdminRepository.update(id, { name, id_access_level });

    return response.json(user);
  }

  async delete(request, response) {
    const { id } = request.params;

    await AdminRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new AdminController();
