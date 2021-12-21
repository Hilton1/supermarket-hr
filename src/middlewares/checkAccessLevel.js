const AdminsRepository = require('../app/repositories/AdminsRepository');

class CheckAccessLevel {
  async ensureAdmin(request, response, next) {
    const { id } = request.headers;

    const user = await AdminsRepository.ensureAdmin(id);

    if (!user) {
      return response.status(401).json({ error: 'User is a not Admin' });
    }

    next();
  }
}

module.exports = new CheckAccessLevel();
