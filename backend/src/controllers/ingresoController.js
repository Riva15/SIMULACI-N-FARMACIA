const pool = require('../config/db');

const registrarIngreso = async (req, res) => {
  try {
    const { id_lote, cantidad, usuario_id, origen } = req.body;

    await pool.query(
      `INSERT INTO ingreso (id_lote, cantidad, usuario_id, origen)
       VALUES ($1, $2, $3, $4)`,
      [id_lote, cantidad, usuario_id, origen]
    );

    res.status(200).json({ mensaje: 'Ingreso registrado con éxito' });
  } catch (error) {
    console.error('Error al registrar ingreso:', error);
    res.status(500).json({ error: 'Error al registrar ingreso' });
  }
};

module.exports = {
  registrarIngreso,
};
