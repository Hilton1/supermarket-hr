const db = require('../../database');

class AdminRepository {
  async findAll(orderBy = 'ASC') {
    const directon = orderBy === 'ASC' ? 'ASC' : 'DESC';

    const rows = await db.query(`SELECT * FROM users ORDER BY name ${directon}`);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT * FROM users
      WHERE id = $1
    `, [id]);

    return row;
  }

  async findByCPF(cpf) {
    const [row] = await db.query(`
    SELECT * FROM users
    WHERE cpf = $1
    `, [cpf]);

    return row;
  }

  async create({ name, cpf }) {
    const [row] = await db.query(`
      INSERT INTO users(name, cpf)
      VALUES($1, $2)
      RETURNING *
    `, [name, cpf]);

    return row;
  }

  async update(id, {
    name, id_access_level,
  }) {
    const [row] = await db.query(`
      UPDATE users
      SET name = $1, id_access_level = $2
      WHERE id = $3
      RETURNING *
    `, [name, id_access_level, id]);

    return row;
  }

  async delete(id) {
    const [row] = await db.query(`
      DELETE FROM users WHERE id = $1
    `, [id]);

    return row;
  }

  async ensureAdmin(id) {
    const [row] = await db.query(`
      SELECT * FROM users
      WHERE id = $1
      AND id_access_level = 1
    `, [id]);

    return row;
  }
}

module.exports = new AdminRepository();
