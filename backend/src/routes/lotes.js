const express = require('express');
const router = express.Router();
const { obtenerLotes } = require('../controllers/loteController');

router.get('/', obtenerLotes);

module.exports = router;
