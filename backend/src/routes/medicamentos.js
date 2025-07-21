// backend/src/routes/medicamentos.js
const express = require('express');
const router = express.Router();
const { registrarMedicamento } = require('../controllers/medicamentoController');
const { obtenerMedicamentos } = require('../controllers/medicamentoController');
router.get('/', obtenerMedicamentos);
router.post('/registrar', registrarMedicamento);

module.exports = router;
