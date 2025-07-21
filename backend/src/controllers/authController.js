// placeholder for authController.js
const authService = require('../services/authService');

async function register(req, res, next) {
  try {
    const usuario = await authService.registerUser(req.body);
    res.status(201).json({ message: 'Registrado con éxito', usuario });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { user, token } = await authService.loginUser(req.body);
    res.json({ message: 'Login exitoso', user, token });
  } catch (err) {
    next(err);
  }
}

module.exports = { register, login };
