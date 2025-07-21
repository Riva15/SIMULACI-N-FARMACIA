const express = require('express');
const cors = require('cors');
const sequelize = require('./sequelize');
const { port } = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const medicamentoRoutes = require('./routes/medicamentos');
const ingresoRoutes = require('./routes/ingresos');
const egresosRoutes = require('./routes/egresos');
const loteRoutes = require("./routes/lotes");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/medicamentos', medicamentoRoutes);
app.use('/api/ingresos', ingresoRoutes);
app.use('/api/egresos', egresosRoutes);
app.use("/api/lotes", loteRoutes);


// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).json({ error: err.message });
});

// Conexión y arranque
async function start() {
  try {
    await sequelize.authenticate();
    console.log('DB conectada');
    app.listen(port, () => console.log(`Server en http://localhost:${port}`));
  } catch (err) {
    console.error('No se pudo conectar a la DB:', err);
  }
}
start();
