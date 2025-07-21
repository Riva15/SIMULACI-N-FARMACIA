// placeholder for authService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');
const Usuario = require('../models/usuario');
const Rol = require('../models/rol');

async function registerUser({ nombres, apellidos, correo, contrasena, rol_id }) {
  const hash = await bcrypt.hash(contrasena, 10);
  const usuario = await Usuario.create({
    nombres, apellidos, correo, contrasena: hash, rol_id
  });
  return usuario;
}

async function loginUser({ correo, contrasena }) {
  const user = await Usuario.findOne({
    where: { correo },
    include: { model: Rol, as: 'rol' }
  });
  if (!user) throw new Error('Usuario no encontrado');
  const valid = await bcrypt.compare(contrasena, user.contrasena);
  if (!valid) throw new Error('Credenciales inválidas');
  const token = jwt.sign({
    id_usuario: user.id_usuario,
    correo: user.correo,
    rol: user.rol.nombre_rol
  }, jwtSecret, { expiresIn: '8h' });
  return { user, token };
}

module.exports = { registerUser, loginUser };
