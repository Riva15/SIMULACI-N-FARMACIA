// backend/src/config/db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  password: process.env.DB_PASSWORD || '123456789',
  database: process.env.DB_NAME || 'DBFarmacia02',
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;
