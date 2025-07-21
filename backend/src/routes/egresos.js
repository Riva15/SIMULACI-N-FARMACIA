const express = require('express');
const router = express.Router();
const egresoController = require('../controllers/egresoController');

router.get('/lotes', egresoController.obtenerLotes);
router.post('/registrar', egresoController.registrarEgreso);

module.exports = router;
