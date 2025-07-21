// placeholder for config.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET || 'una_clave_segura',
  db: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || '123456789',
    database: process.env.DB_NAME || 'DBFarmacia02',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false
  }
};
