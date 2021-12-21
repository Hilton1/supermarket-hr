const db = require('../../database');

class StockistsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase === 'ASC' ? 'ASC' : 'DESC';

    const rows = await db.query(`
      SELECT * FROM products
      ORDER BY name ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT * FROM products
      WHERE id = $1
    `, [id]);

    return row;
  }

  async findByBarcode(barcode) {
    const [row] = await db.query(`
      SELECT * FROM products
      WHERE barcode = $1
    `, [barcode]);

    return row;
  }

  async create({
    barcode, name, price, quantity,
  }) {
    const [row] = await db.query(`
      INSERT INTO products(barcode, name, price, quantity)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [barcode, name, price, quantity]);

    return row;
  }

  async update(id, {
    barcode, name, price, quantity,
  }) {
    const [row] = await db.query(`
      UPDATE products
      SET barcode = $1, name = $2, price = $3, quantity = $4
      WHERE id = $5
      RETURNING *
    `, [barcode, name, price, quantity, id]);

    return row;
  }

  async delete(id) {
    const [row] = await db.query(`
      DELETE FROM products
      WHERE id = $1
    `, [id]);

    return row;
  }
}

module.exports = new StockistsRepository();
