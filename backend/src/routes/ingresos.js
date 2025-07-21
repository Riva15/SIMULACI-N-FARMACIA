const express = require('express');
const router = express.Router();
const { registrarIngreso } = require('../controllers/ingresoController');

router.post('/registrar', registrarIngreso);

module.exports = router;
