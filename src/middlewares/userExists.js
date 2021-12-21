const AdminsRepository = require('../app/repositories/AdminsRepository');

module.exports = function checkUserExists(request, response, next) {
  const { id } = request.params;

  const user = AdminsRepository.findById(id);

  if (!user) {
    response.status(404).json({ error: 'User not found!' });
  }

  request.user = user;
  next();
};
