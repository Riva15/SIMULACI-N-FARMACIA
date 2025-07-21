// placeholder for rol.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Rol = sequelize.define('Rol', {
  id_rol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_rol: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
  }
}, {
  tableName: 'rol',
  timestamps: false
});

module.exports = Rol;
