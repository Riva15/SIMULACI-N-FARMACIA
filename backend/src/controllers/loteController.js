const pool = require('../config/db');

const obtenerLotes = async (req, res) => {
  try {
    const result = await pool.query("SELECT id_lote, cantidad, nombre_medicamento FROM lote");
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener lotes:", error);
    res.status(500).json({ error: "Error al obtener lotes" });
  }
};

module.exports = { obtenerLotes };
