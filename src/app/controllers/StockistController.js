const StockistsRepository = require('../repositories/StockistsRepository');

class StockistController {
  async index(request, response) {
    const { orderBy } = request.query;

    const products = await StockistsRepository.findAll(orderBy);

    return response.json(products);
  }

  async show(request, response) {
    const { barcode } = request.params;

    const product = await StockistsRepository.findByBarcode(barcode);

    if (!product) {
      return response.status(404).json({ error: 'Product not found' });
    }

    return response.json(product);
  }

  async store(request, response) {
    const {
      barcode, name, price, quantity,
    } = request.body;

    if (!barcode || !name || !price || !quantity) {
      return response.status(400).json({ error: 'Fill all fields' });
    }

    const barcodeExists = await StockistsRepository.findByBarcode(barcode);

    if (barcodeExists) {
      return response.status(400).json({ error: 'Barcode already in use' });
    }

    const product = await StockistsRepository.create({
      barcode, name, price, quantity,
    });

    return response.json(product);
  }

  async update(request, response) {
    const { id } = request.params;

    const {
      barcode, name, price, quantity,
    } = request.body;

    const productExists = await StockistsRepository.findById(id);

    if (!productExists) {
      return response.status(404).json({ error: 'Product not found!' });
    }

    const product = await StockistsRepository.update(id, {
      barcode, name, price, quantity,
    });

    return response.json(product);
  }

  async delete(request, response) {
    const { id } = request.params;

    const productExists = await StockistsRepository.findById(id);

    if (!productExists) {
      return response.status(404).json({ error: 'Product not found' });
    }

    await StockistsRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new StockistController();
