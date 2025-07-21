// placeholder for authRoutes.js
const router = require('express').Router();
const { register, login } = require('../controllers/authController');
const { body } = require('express-validator');

router.post('/register', [
  body('nombres').notEmpty(),
  body('apellidos').notEmpty(),
  body('correo').isEmail(),
  body('contrasena').isLength({ min: 6 }),
  body('rol_id').isInt()
], register);

router.post('/login', [
  body('correo').isEmail(),
  body('contrasena').notEmpty()
], login);

module.exports = router;
