const { Router } = require('express');

const router = Router();

router.get('/products', (request, response) => {
  response.json({ message: 'Funcionou!' });
});

module.exports = router;
