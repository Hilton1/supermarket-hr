const { Router } = require('express');
const AdminController = require('./app/controllers/AdminController');

// Middlewares
const CheckAccessLevel = require('./middlewares/checkAccessLevel');
const UserExists = require('./middlewares/userExists');

const router = Router();

router.get('/users', CheckAccessLevel.ensureAdmin, AdminController.index);
router.get('/users/:id', UserExists, CheckAccessLevel.ensureAdmin, AdminController.show);
router.post('/users', CheckAccessLevel.ensureAdmin, AdminController.store);
router.put('/users/:id', UserExists, CheckAccessLevel.ensureAdmin, AdminController.update);
router.delete('/users/:id', UserExists, CheckAccessLevel.ensureAdmin, AdminController.delete);

module.exports = router;
