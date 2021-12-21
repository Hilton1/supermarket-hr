const AccessLevelRepository = require('../app/repositories/AccessLevelRepository');

class CheckAccessLevel {
  async ensureAdmin(request, response, next) {
    const { id } = request.headers;

    const user = await AccessLevelRepository.ensureAdmin(id);

    if (!user) {
      return response.status(401).json({ error: 'User is a not Admin' });
    }

    next();
  }

  async ensureStockist(request, response, next) {
    const { id } = request.headers;

    const user = await AccessLevelRepository.ensureStockist(id);

    if (!user) {
      return response.status(401).json({ error: 'User is a not Stockist' });
    }

    next();
  }
}

module.exports = new CheckAccessLevel();
