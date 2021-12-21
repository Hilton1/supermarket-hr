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
}

module.exports = new StockistsRepository();
