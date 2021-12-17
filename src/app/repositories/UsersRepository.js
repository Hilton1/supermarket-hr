const db = require('../../database');

class UsersRepository {
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
}

module.exports = new UsersRepository();
