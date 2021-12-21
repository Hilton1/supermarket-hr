const db = require('../../database');

class AccessLevelRepository {
  async ensureAdmin(id) {
    const [row] = await db.query(`
      SELECT * FROM users
      WHERE id = $1
      AND id_access_level = 1
    `, [id]);

    return row;
  }

  async ensureStockist(id) {
    const [row] = await db.query(`
      SELECT * FROM users
      WHERE id = $1
      AND id_access_level = 2
    `, [id]);

    return row;
  }
}

module.exports = new AccessLevelRepository();
