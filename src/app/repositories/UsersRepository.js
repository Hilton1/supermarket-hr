const db = require('../../database');

class UsersRepository {
  async findAll(orderBy = 'ASC') {
    const directon = orderBy === 'ASC' ? 'ASC' : 'DESC';

    const rows = await db.query(`SELECT * FROM users ORDER BY name ${directon}`);

    return rows;
  }
}

module.exports = new UsersRepository();
